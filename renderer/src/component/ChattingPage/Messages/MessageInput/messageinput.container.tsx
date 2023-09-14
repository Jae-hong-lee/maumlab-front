import { ChangeEvent, useState } from "react";
import MSInputUI from "./messageinput.presenter";
import MessageData from "../../../../common/firebase/database/MessageData";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { LoginInfo } from "../../../../common/recoil/userInfo";

export default function MSInputContainer() {
  const [text, setText] = useState<string>("");

  const [loginUser] = useRecoilState<any>(LoginInfo);

  const { MessageSend } = MessageData();
  const router = useRouter();

  const SendMessage = async () => {
    if (text === "") {
      return;
    }

    await MessageSend(text, router.asPath.split("/")[2], loginUser);

    setText("");
  };
  const onChangeText = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  return (
    <MSInputUI
      text={text}
      onChangeText={onChangeText}
      SendMessage={SendMessage}
    />
  );
}
