import {
  Timestamp,
  arrayUnion,
  doc,
  getDoc,
  onSnapshot,
  updateDoc,
} from "firebase/firestore";
import { db } from "../firebase";

export default function MessageData() {
  // ⭐️ 메세지 보내기
  const MessageSend = async (text: string, router: string, loginUser: any) => {
    const ChatRoomID = router.split("#")[1];
    const UserUID = router.split("#")[0];

    const TypeRoomId = await FindTypeChatRoom(ChatRoomID);
    // console.log(TypeRoomId, "룸타입 구별");

    if (TypeRoomId === "PersonalChatRooms") {
      try {
        await updateDoc(doc(db, "PersonalChatRooms", ChatRoomID), {
          message: arrayUnion({
            text,
            date: Timestamp.now(),
            senderID: UserUID,
            profileImg: "",
            senderNickName: loginUser.displayName,
          }),
        });
      } catch (error) {
        console.log(error);
      }
    } else if (TypeRoomId === "OpenChatRooms") {
      try {
        await updateDoc(doc(db, "OpenChatRooms", ChatRoomID), {
          message: arrayUnion({
            text,
            date: Timestamp.now(),
            senderID: UserUID,
            profileImg: "",
            senderNickName: loginUser.displayName,
          }),
        });
      } catch (error) {
        console.log(error);
      }
    }

    console.log("Update Message");
  };

  // ⭐️ 메세지 리스트 받아오기
  const MessageListFatch = async (roomID: string) => {
    // const unsub = onSnapshot(
    //   doc(db, "userChats", sessionStorage.uid),
    //   (doc: any) => {
    //     setChats(doc.data());
    //   }
    // );

    // RoomType 체크하기
    const RoomType = await FindTypeChatRoom(roomID);

    // ⭐️ RoomType에 따라 메세지 받아오기 ⭐️
    if (RoomType === "PersonalChatRooms") {
      // PersonalChat
      const docRef = doc(db, "PersonalChatRooms", roomID);
      const res = (await getDoc(docRef)).data().message;

      return res;
    }
    if (RoomType === "OpenChatRooms") {
      // OpenChat
      const docRef = doc(db, "OpenChatRooms", roomID);
      const res = (await getDoc(docRef)).data().message;

      return res;
    }
  };

  // ⭐️ 채팅방 Type구별
  // exists() 함수를 이용해서 컬렉션안에 roomID가 있는지 Boolean 값으로 확인
  const FindTypeChatRoom = async (roomID: string) => {
    const PersonalRef = doc(db, "PersonalChatRooms", roomID);
    const OpenChatRef = doc(db, "OpenChatRooms", roomID);

    const PersonalSnap = await getDoc(PersonalRef);
    const OpenChatSnap = await getDoc(OpenChatRef);

    if (PersonalSnap.exists() === true) {
      return "PersonalChatRooms";
    }
    if (OpenChatSnap.exists() === true) {
      return "OpenChatRooms";
    }
  };

  return { MessageSend, MessageListFatch, FindTypeChatRoom };
}
