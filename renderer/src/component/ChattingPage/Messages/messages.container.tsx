import { useEffect, useState } from "react";
import MessagesUI from "./messages.presenter";
import { useRouter } from "next/router";
import MessageData from "../../../common/firebase/database/MessageData";

export default function MessagesContainer() {
  const router = useRouter();
  const { MessageListFatch } = MessageData();
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const fetchMessageData = async () => {
      const FetchMessageList = await MessageListFatch(
        `${router.asPath.split("/")[2].split("#")[1]}`
      );
      // console.log("messages useEffect");
      setMessages(FetchMessageList);
    };
    fetchMessageData();
  }, [router.asPath]);

  return <MessagesUI messages={messages} />;
}
