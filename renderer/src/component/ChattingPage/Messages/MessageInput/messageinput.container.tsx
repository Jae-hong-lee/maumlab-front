import { ChangeEvent, useState } from "react";
import MSInputUI from "./messageinput.presenter";
import MessageData from "../../../../common/firebase/database/MessageData";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { LoginInfo } from "../../../../common/recoil/userInfo";
// import { v4 as uuid } from "uuid";
import { ref, uploadBytesResumable } from "firebase/storage";
import { storage } from "../../../../common/firebase/firebase";

export default function MSInputContainer() {
  const [text, setText] = useState<string>("");
  const [img, setImg] = useState<any>(null);
  const [imgfile, setFile] = useState<any>();

  const { MessageSend } = MessageData();
  const router = useRouter();
  const [loginUser] = useRecoilState<any>(LoginInfo);

  const onChangeText = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const onChangeIMG = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files !== null) {
      encodeFileToBase64(e.target.files[0]);
      setFile(e.target.files[0]);
    }
  };

  const encodeFileToBase64 = (fileBlob: any) => {
    const reader: any = new FileReader();
    reader.readAsDataURL(fileBlob);
    return new Promise((resolve: any) => {
      reader.onload = () => {
        setImg(reader.result);
        resolve();
      };
    });
  };

  const SendMessage = async () => {
    if (text === "" && img === null) {
      return;
    }

    try {
      if (img) {
        // uuid import
        // const storageRef = ref(storage, "Chat " + uuid());
        const uploadTask = uploadBytesResumable(storageRef, imgfile);
        console.log(img);
      } else {
        await MessageSend(text, router.asPath.split("/")[2], loginUser);
      }
    } catch (error) {
      console.log(error);
    }
    setText("");
  };

  return (
    <MSInputUI
      text={text}
      onChangeText={onChangeText}
      SendMessage={SendMessage}
      img={img}
      onChangeIMG={onChangeIMG}
    />
  );
}
