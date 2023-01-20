import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { auth, db } from "./firebase.js";

export default function useAuth() {
  // 이메일, 패스워드 회원가입
  const signup = async (email: string, password: string) => {
    // 이메일 패스워드로 회원가입 Promise
    const CreatUserRES = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const date = new Date().getTime();

    // 유저정보 및 채팅목록 DB 생성
    try {
      await setDoc(doc(db, "userinfo", CreatUserRES.user.email), {
        test: "유저정보",
        uid: CreatUserRES.user.uid,
        email: CreatUserRES.user.email,
      });
      await setDoc(doc(db, "ChatList", CreatUserRES.user.uid), {
        test: "채팅목록",
        date,
      });
      alert("회원가입에 성공하였습니다.");
    } catch (error) {
      console.log(error);
      alert("회원가입에 실패하였습니다.");
    }
  };

  return { signup };
}
