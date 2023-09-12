import { ChangeEvent, useState } from "react";
import MSInputUI from "./messageinput.presenter";
import MessageData from "../../../../common/firebase/database/MessageData";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { LoginInfo } from "../../../../common/recoil/userInfo";
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytes,
  uploadBytesResumable,
} from "firebase/storage";
import { db, Storage } from "../../../../common/firebase/firebase";
import { v4 as uuid } from "uuid";
import { Timestamp, arrayUnion, doc, updateDoc } from "firebase/firestore";

export default function MSInputContainer() {
  const [text, setText] = useState<string>("");
  const [img, setImg] = useState<any>(null);
  const [imgfile, setFile] = useState<any>();
  const [loginUser] = useRecoilState<any>(LoginInfo);

  const { MessageSend, FindTypeChatRoom } = MessageData();
  const router = useRouter();

  const SendMessage = async () => {
    if (text === "" && img === null) {
      return;
    }

    if (img) {
      // console.log("imgfile: ", imgfile);
      // console.log("Img: ", img);
      const storageRef = ref(Storage, "Chat " + uuid());

      const uploadTask = uploadBytesResumable(storageRef, imgfile);
      console.log("uploadTask: ", uploadTask);

      // uploadTask.on(
      //   "state_changed",
      //   (snapshot: any) => {
      //     // 업로드 %
      //     const progress =
      //       (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      //     console.log(`Upload is ${progress}% done`);
      //   },
      //   (error: any) => {
      //     // Error 메세지
      //     console.log(`error: image upload error ${JSON.stringify(error)}`);
      //   },
      //   () => {
      //     // 업로드 후 url 가져와서 db 업데이트
      //     getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
      //       console.log("File available at", downloadURL);
      //     });
      //   }
      // );
    } else {
      await MessageSend(text, router.asPath.split("/")[2], loginUser);
    }

    setText("");
    setImg("null");
  };
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
