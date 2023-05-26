import { useRouter } from "next/router";
import { useEffect } from "react";
// types
import { NextComponentType, NextPageContext } from "next";
import { AppProps } from "next/app";
// auth
import { auth } from "../firebase/firebase";
// 전역변수
import { useRecoilState } from "recoil";
import { LoginInfo } from "../recoil/userInfo";

const useAuth =
  (Component: NextComponentType<NextPageContext, any, any>) => () => {
    const router = useRouter();

    const [, setUserInfo] = useRecoilState(LoginInfo);
    useEffect(() => {
      auth.onAuthStateChanged((user: any) => {
        if (!user) {
          alert("로그인해주세요");
          router.push("/login");
        } else {
          // recoil 전역변수 저장
          // prop을 직접적으로 저장하면서 type 에러가 나옴 -> stringfy, parse 를 이용하여 전역변수로 저장
          let res = JSON.stringify(user);
          const userInfo = JSON.parse(res);
          setUserInfo(userInfo);
        }
      });
    }, []);

    return <Component />;
  };

export default useAuth;
