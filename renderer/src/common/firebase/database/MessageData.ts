import {
  Timestamp,
  arrayUnion,
  collection,
  doc,
  updateDoc,
} from "firebase/firestore";
import { db } from "../firebase";

export default function MessageData() {
  const MessageUpdate = async (text: string, chatId: any) => {
    // 1:1, 1:N 나누기
    // if (condition) {
    // } else {
    // }
    await updateDoc(doc(db, "PersonalChatRooms", chatId), {
      messages: arrayUnion({
        id: "1",
        text,
        senderId: "보내는 사람",
        date: Timestamp.now(),
      }),
    });
  };

  return { MessageUpdate };
}
