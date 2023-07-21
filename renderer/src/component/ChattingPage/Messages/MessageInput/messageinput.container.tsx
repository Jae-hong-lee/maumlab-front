import { ChangeEvent, useState } from "react";
import MSInputUI from "./messageinput.presenter";
import MessageData from "../../../../common/firebase/database/MessageData";
// Recoil
import { LoginInfo } from "../../../../common/recoil/userInfo";
import { useRecoilState } from "recoil";

export default function MSInputContainer() {
  const [text, setText] = useState("");
  const [UserInfo] = useRecoilState(LoginInfo);
  const { MessageUpdate } = MessageData();

  const onChangeText = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const SubmitMessage = async () => {
    console.log(text);
    await MessageUpdate(text, UserInfo.uid);
  };

  return (
    <MSInputUI
      text={text}
      onChangeText={onChangeText}
      SubmitMessage={SubmitMessage}
    />
  );
}
