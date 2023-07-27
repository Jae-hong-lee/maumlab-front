import { useEffect } from "react";
import MessagesUI from "./messages.presenter";
import { useRouter } from "next/router";
import MessageData from "../../../common/firebase/database/MessageData";

export default function MessagesContainer() {
  const router = useRouter();
  const { MessageListFatch } = MessageData();
  console.log(router.asPath, "MessageCotainer");

  useEffect(() => {
    const fetchMessageData = async () => {
      const FetchMessageList = await MessageListFatch(
        `${router.asPath.split("/")[2].split("#")[1]}`,
        "1:1"
      );
    };
    fetchMessageData();
  }, [router.asPath]);

  return <MessagesUI />;
}
