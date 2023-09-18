import {
  Timestamp,
  arrayUnion,
  doc,
  getDoc,
  updateDoc,
} from "firebase/firestore";
import { db } from "../firebase";

export default function MessageData() {
  /**
   * 메시지 보내기
   * @param {string}text
   * @param {string}router
   * @param {any}loginUser
   * @returns 성공여부
   */
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
  };

  /**
   * 채팅방 Type구별
   * : exists() 함수를 이용해서 컬렉션안에 roomID가 있는지 Boolean 값으로 확인
   * @param {string}roomID
   * @returns {string}RoomTypeName
   */

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

  return { MessageSend, FindTypeChatRoom };
}
