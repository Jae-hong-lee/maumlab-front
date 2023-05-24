import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth, db } from "../firebase";
import {
  collection,
  doc,
  getDocs,
  query,
  setDoc,
  where,
} from "firebase/firestore";

// 회원가입, 로그인 데이터관리하는 함수들
export default function AuthDataSource() {
  // 신규 회원가입 이메일 패스워드
  const signup = async (email: string, password: string, nickName: string) => {
    try {
      const nameCheck = await CheckNickName(nickName);
      if (nameCheck) {
        // throw: 사용자가 지정한 에러 출력
        throw Error("닉네임이 중복되었습니다.");
      }

      const { user } = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      await saveUserInfo(user.email, user.uid, nickName);
    } catch (e) {
      if (e instanceof Error) {
        throw Error(e.message);
      }
    }
  };

  // 기존 사용자 로그인
  const login = async (email: string, password: string) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (e) {
      if (e instanceof Error) {
        if (e.message.includes("(auth/email-already-in-use)"))
          throw Error("이미 존재하는 계정입니다.");
        if (e.message.includes("(auth/user-not-found)"))
          throw Error("존재하지 않는 사용자입니다.");
        if (e.message.includes("(auth/wrong-password)"))
          throw Error("이메일 또는 비밀번호가 일치하지 않습니다.");

        return "오류가 발생했습니다.";
      }
    }
  };

  //------------------

  // 닉네임 중복체크
  const CheckNickName = async (name: string) => {
    const q = query(collection(db, "Users"), where("nickName", "==", name));
    const users = await getDocs(q);
    return users.size !== 0;
  };

  // 사용자 정보 Storage 저장
  const saveUserInfo = async (email: string, uid: string, nickName: string) => {
    try {
      await setDoc(doc(db, "Users", uid), {
        email,
        nickName,
        uid,
        rooms: [],
      });
    } catch (error) {
      console.log("유저정보저장실패");
    }
  };

  return { signup, login };
}
