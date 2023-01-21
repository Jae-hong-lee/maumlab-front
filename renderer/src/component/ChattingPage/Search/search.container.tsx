import {
  doc,
  getDoc,
  serverTimestamp,
  setDoc,
  updateDoc,
} from "firebase/firestore";
import { useRouter } from "next/router";
import { useState } from "react";
import { useRecoilState } from "recoil";
import { db } from "../../../common/firebase/firebase";
import { ChatUserInfo } from "../../../common/recoil/chatinfo";
import SearchUI from "./search.presenter";
import { ChipData } from "./search.type";

export default function SearchContainer() {
  const [chatUser, setChatUser] = useRecoilState<any>(ChatUserInfo);
  const [chipData, setChipData] = useState([]);
  const [user, setUser] = useState<null | any>(null);

  const handleDelete = (chipToDelete: ChipData) => () => {
    setChipData((chips) => chips.filter((chip) => chip !== chipToDelete));
  };

  const onClickUser = (el: string) => {
    if (chipData.includes(el)) {
      return;
    } else {
      setChipData((chips) => [...chips, el]);
    }
  };

  const onClickSelect = async (e: any) => {
    const emailList = e.join("");
    const ChatEmail =
      emailList > sessionStorage.email
        ? sessionStorage.email + emailList
        : emailList + sessionStorage.email;

    if (chipData.length === 0) {
      return console.log("없음");
    } else {
      try {
        const res = await getDoc(doc(db, "chats", ChatEmail));
        if (!res.exists()) {
          await setDoc(doc(db, "chats", ChatEmail), { messages: [] });
          await updateDoc(doc(db, "ChatList", sessionStorage.email), {
            [ChatEmail + ".userInfo"]: {
              email: emailList,
            },
            [ChatEmail + ".data"]: serverTimestamp(),
          });

          await updateDoc(doc(db, "ChatList", emailList), {
            [ChatEmail + ".userInfo"]: {
              email: sessionStorage.email,
            },
            [ChatEmail + ".data"]: serverTimestamp(),
          });
        }
      } catch (error) {
        console.log("에러", error.message);
      }
    }
  };

  return (
    <SearchUI
      chatUser={chatUser}
      chipData={chipData}
      handleDelete={handleDelete}
      onClickUser={onClickUser}
      onClickSelect={onClickSelect}
    />
  );
}
