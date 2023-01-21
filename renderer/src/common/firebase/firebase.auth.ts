import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { useRouter } from "next/router";
import { auth, db } from "./firebase";

export default function useAuth() {
  const router = useRouter();

  // 회원가입
  const Signup = async (email: string, password: string) => {
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
      await setDoc(doc(db, "ChatList", CreatUserRES.user.email), {
        test: "채팅목록",
        date,
      });
      alert("회원가입에 성공하였습니다.");
      router.push("/login");
    } catch (error) {
      console.log(error);
      alert("회원가입에 실패하였습니다.");
    }
  };

  // 로그인
  const Login = async (email: string, password: string) => {
    try {
      const UserData: any = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      // 로그인 확인 후 email, accessToken, uid 세션스토리지 저장.
      sessionStorage.setItem("email", UserData.user.email);
      sessionStorage.setItem("token", UserData.user.accessToken);
      sessionStorage.setItem("uid", UserData.user.uid);

      router.push(`/chat/${UserData.user.uid}`);
    } catch (error) {
      console.log("Login Error", error);
      alert("로그인실패!");
    }
  };
  return { Signup, Login };
}
