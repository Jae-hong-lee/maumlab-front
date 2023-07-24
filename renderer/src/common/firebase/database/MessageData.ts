import {
  Timestamp,
  addDoc,
  arrayUnion,
  collection,
  doc,
  setDoc,
  updateDoc,
} from "firebase/firestore";
import { db } from "../firebase";

export default function MessageData() {
  const MessageUpdate = async (text: string, chatRoomID: string) => {
    // 1:1, 1:N 나누기
    // if (condition) {
    // } else {
    // }
    console.log(chatRoomID);
    await updateDoc(doc(db, "PersonalChatRooms", chatRoomID), {
      message: arrayUnion({
        // id: 1,
        text,
        // senderId: sessionStorage.uid,
        date: Timestamp.now(),
        // profileImg: sessionStorage.profileImg,
      }),
    });
  };

  return { MessageUpdate };
}
