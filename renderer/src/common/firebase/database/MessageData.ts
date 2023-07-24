import {
  Timestamp,
  addDoc,
  arrayUnion,
  collection,
  doc,
  getDoc,
  setDoc,
  updateDoc,
} from "firebase/firestore";
import { db } from "../firebase";

export default function MessageData() {
  const MessageUpdate = async (text: string, router: string) => {
    const ChatRoomID = router.split("#")[1];
    const UserUID = router.split("#")[0];
    console.log("라우터", ChatRoomID);

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

  return { MessageUpdate };
}
