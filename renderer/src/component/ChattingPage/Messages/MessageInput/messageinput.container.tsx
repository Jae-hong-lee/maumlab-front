import { ChangeEvent, useState } from "react";
import MSInputUI from "./messageinput.presenter";
import MessageData from "../../../../common/firebase/database/MessageData";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { LoginInfo } from "../../../../common/recoil/userInfo";

export default function MSInputContainer() {
  const [text, setText] = useState("");
  const { MessageSend } = MessageData();
  const router = useRouter();
  const [loginUser] = useRecoilState<any>(LoginInfo);

  const onChangeText = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const SendMessage = async () => {
    console.log(router.asPath);
    if (text === "") {
      return;
    }

    try {
      await MessageSend(text, router.asPath.split("/")[2], loginUser);
      setText("");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <MSInputUI
      text={text}
      onChangeText={onChangeText}
      SendMessage={SendMessage}
    />
  );
}
