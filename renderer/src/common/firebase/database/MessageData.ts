import {
  Timestamp,
  addDoc,
  arrayUnion,
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  setDoc,
  updateDoc,
  where,
} from "firebase/firestore";
import { db } from "../firebase";

export default function MessageData() {
  // 메세지 보내기
  const MessageUpdate = async (text: string, router: string) => {
    const ChatRoomID = router.split("#")[1];
    const UserUID = router.split("#")[0];

    const docRef = doc(db, "Users", UserUID);
    const currentUserRoomsDoc = (await getDoc(docRef)).data()?.rooms;

    // 로그인 유저가 가지고 있는 채팅방
    const RoomDocs = await Promise.all(
      currentUserRoomsDoc.map((roomRef: any) => getDoc(roomRef))
    );
    const RoomDoc = RoomDocs.filter((el) => el.id == ChatRoomID);
    const res = RoomDoc[0].ref.path.split("/")[0];

    if (res === "PersonalChatRooms") {
      try {
        await updateDoc(doc(db, "PersonalChatRooms", ChatRoomID), {
          message: arrayUnion({
            text,
            date: Timestamp.now(),
            id: 1,
            // senderId: sessionStorage.uid,
            // profileImg: sessionStorage.profileImg,
          }),
        });
      } catch (error) {
        console.log(error);
      }
    } else if (res === "OpenChatRooms") {
      try {
        await updateDoc(doc(db, "OpenChatRooms", ChatRoomID), {
          message: arrayUnion({
            text,
            date: Timestamp.now(),
            id: 1,
          }),
        });
      } catch (error) {
        console.log(error);
      }
    }
    // 1:1, 1:N 나누기
    console.log("Update Message");
  };

  // 메세지 리스트 받아오기

  const MessageListFatch = async (roomID: string, roomType: string) => {
    console.log(roomType, "MessageData");
    const docRef = doc(db, "PersonalChatRooms", roomID);

    const res = (await getDoc(docRef)).data().message;
    console.log(res);
    // const q = query(collection(db, "Users"), where("uid", "!=", "cc"));
    // const res = await getDocs(q);
    // const MessageList = res.docs.map((doc) => ({
    //   ...doc.data(),
    // }));
    // return MessageList;
    return res;
  };

  return { MessageUpdate, MessageListFatch };
}

// 메세지를 보낼때와 메세지 리스트를 받아올때 어떤 타입에 채팅방인지 알아야한다.
// 그걸 판단하는 함수를 만들어야할듯.
