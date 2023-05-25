import { useRouter } from "next/router";
import { useEffect } from "react";
// types
import { NextComponentType, NextPageContext } from "next";
import { AppProps } from "next/app";
// auth
import { auth } from "../firebase/firebase";

const useAuth =
  (Component: NextComponentType<NextPageContext, any, any>) =>
  (props: AppProps) => {
    const router = useRouter();

    useEffect(() => {
      auth.onAuthStateChanged((user: any) => {
        if (!user) {
          alert("로그인해주세요");
          router.push("/login");
        } else {
          // recoil 전역변수 저장
          const uid = user.uid;
          console.log("useAuth", user);
        }
      });
    }, []);

    return <Component />;
  };

export default useAuth;
