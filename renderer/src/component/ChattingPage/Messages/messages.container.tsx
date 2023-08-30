import { useEffect, useState } from "react";
import MessagesUI from "./messages.presenter";
import { useRouter } from "next/router";
import MessageData from "../../../common/firebase/database/MessageData";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../../../common/firebase/firebase";

export default function MessagesContainer() {
  const router = useRouter();
  const { MessageListFatch, FindTypeChatRoom } = MessageData();
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const fetchMessageData = async () => {
      const RoomType = await FindTypeChatRoom(
        `${router.asPath.split("/")[2].split("#")[1]}`
      );

      if (RoomType === "PersonalChatRooms") {
        // PersonalChat
        const unsub = onSnapshot(
          doc(db, RoomType, `${router.asPath.split("/")[2].split("#")[1]}`),
          (doc: any) => {
            setMessages(doc.data().message);
          }
        );
        return;
      }
      if (RoomType === "OpenChatRooms") {
        // OpenChat
        const unsub = onSnapshot(
          doc(db, RoomType, `${router.asPath.split("/")[2].split("#")[1]}`),
          (doc: any) => {
            setMessages(doc.data().message);
          }
        );
        return;
      }

      // const FetchMessageList = await MessageListFatch(
      //   `${router.asPath.split("/")[2].split("#")[1]}`
      // );
      // setMessages(FetchMessageList);
      console.log(messages);
    };
    fetchMessageData();
  }, [router.asPath]);

  return <MessagesUI messages={messages} />;
}
