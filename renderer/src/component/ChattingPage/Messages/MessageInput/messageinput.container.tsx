import { ChangeEvent, useState } from "react";
import MSInputUI from "./messageinput.presenter";
import MessageData from "../../../../common/firebase/database/MessageData";
import { useRouter } from "next/router";

export default function MSInputContainer() {
  const [text, setText] = useState("");

  const { MessageUpdate } = MessageData();
  const router = useRouter();

  const onChangeText = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const SubmitMessage = async (e: any) => {
    if (text === "") {
      return;
    }

    try {
      await MessageUpdate(text, router.asPath.split("/")[2]);
      setText("");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <MSInputUI
      text={text}
      onChangeText={onChangeText}
      SubmitMessage={SubmitMessage}
    />
  );
}
