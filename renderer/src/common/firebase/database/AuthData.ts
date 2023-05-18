import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../firebase";

// 회원가입, 로그인 데이터관리하는 함수들
export default function AuthDataSource() {
  // 신규 회원가입 이메일 패스워드
  const signup = async (email: string, password: string, name: String) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then(async (res) => {
        const User: any = res.user;
        // console.log("회원가입성공", User);
        await updateProfile(User, {
          displayName: `${name}`,
        })
          .then(() => {
            console.log("Profile Updated", User);
          })
          .catch((error) => {
            console.log("업데이트 실패", error);
          });
      })
      .catch((error) => {
        console.log("회원가입 실패", error.message);
      });
  };

  // 기존 사용자 로그인
  const login = async (email: string, password: string) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((res) => {
        const user = res.user;
        console.log(user);
      })
      .catch((error) => {
        console.log("로그인실패", error.message);
      });
  };
  return { signup, login };
}
