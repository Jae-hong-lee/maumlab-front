import {
  DocumentData,
  DocumentReference,
  QueryDocumentSnapshot,
  addDoc,
  arrayRemove,
  arrayUnion,
  collection,
  doc,
  getDoc,
  getDocs,
  limit,
  query,
  updateDoc,
  where,
} from "firebase/firestore";
import { db } from "../firebase";

export default function CreateRoom() {
  /**
   * 1:1 채팅방 생성
   * @param uid
   * @param pairUid
   * @param roomname
   * @returns 생성된 Room id
   */

  const createPersonalChatRoom = async (
    uid: any,
    pairUid: any,
    roomname: string
  ) => {
    const personalChatRoomRef = collection(db, "PersonalChatRooms");

    const existRoomId = await findPersonalChatRoom(uid, pairUid);
    if (existRoomId) return existRoomId;

    const roomDocRef = await addDoc(personalChatRoomRef, {
      users: [uid, pairUid],
      message: [],
      type: "1:1",
      roomname,
    });

    // 사용자의 rooms 필드에 room uid 추가
    await UsersUpdateRoom([uid, pairUid], roomDocRef);

    return roomDocRef.id;
  };

  /**
   * 1:N 채팅방 생성
   * @param {string}roomID
   * @param uid
   * @param roomname
   * @param hostUid
   * @returns 생성된 Room id
   */
  const createOpenChatRoom = async (
    uids: string[],
    roomname: string,
    hostUid: any
  ) => {
    const OpenChatRoomRef = collection(db, "OpenChatRooms");

    const roomDocRef = await addDoc(OpenChatRoomRef, {
      users: uids,
      roomname,
      hostUid,
      message: [],
      type: "1:N",
    });

    await UsersUpdateRoom([...uids, hostUid], roomDocRef);

    return roomDocRef.id;
  };

  /**
   * 1:1 채팅방이 존재하는가??
   * @param uid
   * @param pairUid
   * @returns 있다면 rooms에 첫번째 인수의 id
   */
  const findPersonalChatRoom = async (uid: string, pairUid: string) => {
    const personalChatRoomRef = collection(db, "PersonalChatRooms");
    // firebase in 함수란?
    // 인용: in 연산자를 사용하여 같은 필드에서 여러 동등(==) 절을 논리적 OR과 결합합니다.
    // in 쿼리는 지정된 필드가 비교 값과 일치하는 문서를 반환
    const q = query(
      personalChatRoomRef,
      where("users", "in", [
        [uid, pairUid],
        [pairUid, uid],
      ]),
      limit(1)
    );
    // users 필드에서 [uid, pairUid], [pairUid, uid] 으로 설정된 문서를 반환
    // limit 함수를 통해 1개를 정렬해서 출력.

    const docs = await getDocs(q);
    let rooms: QueryDocumentSnapshot<DocumentData>[] = [];
    // 위에 작성한 쿼리문을 통해 docs를 받아오고 rooms 배열로 옮김.
    docs.forEach((room) => {
      rooms.push(room);
    });
    // roooms 배열에 첫번째 인수의 id 를 return
    return rooms[0]?.id;
  };

  /**
   * 사용자(Users)의  room필드에 room uid 추가
   * arrayUnion()은 배열에 없는 요소만 추가
   * @params uids
   * @params roomDocRef
   */
  const UsersUpdateRoom = async (
    uids: string[],
    roomDocRef: DocumentReference<DocumentData>
  ) => {
    uids.map(async (uid: string) => {
      await updateDoc(doc(db, "Users", uid), {
        rooms: arrayUnion(roomDocRef),
      });
    });
  };

  /**
   * 현재 로그인한 유저가 속해있는 채팅방 가져오기
   * @param currentUserUid 로그인한 유저의 uid
   * @returns 방 리스트
   */
  const fetchUserList = async (currentUserUid: any) => {
    const userUid = currentUserUid.split("#")[0];
    const docRef = doc(db, "Users", userUid);

    const currentUserRoomsDoc = (await getDoc(docRef)).data()?.rooms;

    const RoomDocs = await Promise.all(
      currentUserRoomsDoc.map((roomRef: any) => getDoc(roomRef))
    );
    const res = await Promise.all(
      RoomDocs.map(async (e) => {
        // "로그인 유저가 가지고 있는 id들"
        const userIds = await e
          .data()
          ?.users?.filter((id: string) => !id.includes(userUid));

        // 로그인 유저가 가질 수 있는 상대유저정보들
        const userDocs = await Promise.all(
          userIds.map((id: string) => getDoc(doc(db, "Users", id)))
        );
        const users = userDocs.map((userDoc: any) => userDoc.data());

        return {
          ...e.data(),
          users,
          uid: e.id,
        };
      })
    );

    return res;
  };

  /**
   * 방 즐겨찾기 추가 및 삭제
   * @param checked
   * @param user
   * @param res
   */
  const favoritedRoom = async (checked: boolean, user: string, res: any) => {
    const UserID = user.split("#")[0];

    if (checked) {
      // 필드 update
      await updateDoc(doc(db, "Users", UserID), {
        Favorited: arrayUnion({
          id: res[0].uid,
          description: "즐겨찾기",
          data: [res[0].roomname, res[0].type],
        }),
      });
    } else {
      // delete 필드
      try {
        await updateDoc(doc(db, "Users", UserID), {
          Favorited: arrayRemove({
            id: res[0].uid,
            description: "즐겨찾기",
            data: [res[0].roomname, res[0].type],
          }),
        });
      } catch (error) {
        console.log(error);
      }
    }
  };

  /**
   * 로그인한 유저가 가지고 있는 즐겨찾기 리스트
   * @param LoginUid
   * @param RoomUid
   * @returns
   */
  const fetchUserInfo = async (LoginUid: string, RoomUid: string) => {
    const docRef = doc(db, "Users", LoginUid);
    const currentUserRoomsDoc = (await getDoc(docRef)).data();
    // Favorited List
    const res = currentUserRoomsDoc?.Favorited?.filter(
      (el: any) => el.id === RoomUid
    );

    if (RoomUid === undefined) {
      return currentUserRoomsDoc.Favorited;
    }

    if (currentUserRoomsDoc.Favorited) {
      // console.log("즐찾있음");

      if (res[0]?.id === RoomUid) {
        // console.log("방 uid 같음");
        return true;
      } else {
        // console.log("방 Uid 틀림");
        return false;
      }
    } else {
      // console.log("즐찾없음");
      return false;
    }
  };

  return {
    createPersonalChatRoom,
    createOpenChatRoom,
    fetchUserList,
    favoritedRoom,
    fetchUserInfo,
  };
}
