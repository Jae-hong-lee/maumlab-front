import { addDoc, collection } from "firebase/firestore";

export default function createRoom() {
  // *채팅방 생성
  const createPersonalChatRoom = async (uid: string, pairUid: string) => {
    const personalChatRoomRef = collection(
      this.store,
      this.PERSONAL_CHAT_ROOM_COLLECTION
    );

    const existRoomId = await this.findExistPersonalChatRoom(uid, pairUid);

    if (existRoomId) return existRoomId;

    const roomDocRef = await addDoc(personalChatRoomRef, {
      users: [uid, pairUid],
      messages: [],
      type: "personal",
    });

    await this.pushUsersIntoRoom([uid, pairUid], roomDocRef);

    return roomDocRef.id;
  };
}
