import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../../common/firebase/firebase";
import ChatListUI from "./chatlist.presenter";

export default function ChatListContainer() {
  const [chats, setChats] = useState([]);

  useEffect(() => {
    // 채팅정보
    const getChats = async () => {
      let chats = [];
      const querySnapshot: any = await getDocs(collection(db, "ChatList"));
      querySnapshot.forEach((doc: any) => {
        chats.push(doc.data());
      });
      setChats(chats);

      // Clean up
      return () => {
        querySnapshot();
      };
    };
    // session 값 확인

    sessionStorage.uid && getChats();
  }, []);

  return <ChatListUI />;
}
