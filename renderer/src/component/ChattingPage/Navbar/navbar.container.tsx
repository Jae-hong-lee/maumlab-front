import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { db } from "../../../common/firebase/firebase";
import { ChatUserInfo } from "../../../common/recoil/chatinfo";
import NavbarUI from "./navbar.presenter";

export default function NavbarContainer() {
  const [open, setOpen] = useState(false);
  const [chatUser, setChatUser] = useRecoilState<any>(ChatUserInfo);

  useEffect(() => {
    // 유저정보
    const getUserInfo = async () => {
      let userinfoArr = [];
      const querySnapshot: any = await getDocs(collection(db, "userinfo"));
      querySnapshot.forEach((doc: any) => {
        userinfoArr.push(doc.data());
      });
      setChatUser(userinfoArr);

      // Clean up
      return () => {
        querySnapshot();
      };
    };

    // session 값 확인
    sessionStorage.uid && getUserInfo();
  }, []);

  const handleModal = () => {
    setOpen((prev) => !prev);
  };

  return <NavbarUI open={open} handleModal={handleModal} />;
}
