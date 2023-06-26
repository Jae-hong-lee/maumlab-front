import {
  DocumentData,
  DocumentReference,
  QueryDocumentSnapshot,
  addDoc,
  arrayUnion,
  collection,
  doc,
  getDocs,
  limit,
  query,
  updateDoc,
  where,
} from "firebase/firestore";
import { db } from "../firebase";

export default function CreateRoom() {
  // 1:1 채팅방 생성
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

  // 1:N 채팅방 생성
  const createOpenChatRoom = async (
    uids: string[],
    title: string,
    hostUid: any
  ) => {
    const OpenChatRoomRef = collection(db, "OpenChatRooms");

    const roomDocRef = await addDoc(OpenChatRoomRef, {
      users: uids,
      title,
      hostUid,
      message: [],
      type: "1:N",
    });

    await UsersUpdateRoom([...uids, hostUid], roomDocRef);

    return roomDocRef.id;
  };

  // 1:1 채팅방이 존재하는가??
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

  // 사용자(Users)의  room필드에 room uid 추가
  // arrayUnion()은 배열에 없는 요소만 추가
  const UsersUpdateRoom = async (
    uids: string[],
    roomDocRef: DocumentReference<DocumentData>
  ) => {
    uids.map(async (uid: string) => {
      await updateDoc(doc(db, "Users", uid), {
        rooms: arrayUnion(roomDocRef),
        // rooms: roomDocRef,
      });
    });
  };

  return { createPersonalChatRoom, createOpenChatRoom };
}
