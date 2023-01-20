import styled from "@emotion/styled";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { auth } from "../../../src/common/firebase/firebase";
import Chatting from "../../../src/component/ChattingPage";

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default function ChatPage() {
  const [init, setInit] = useState(false);
  const router = useRouter();

  // 로그인 상태확인
  useEffect(() => {
    auth.onAuthStateChanged((user: any) => {
      // user 판명을 듣고
      if (!user) {
        // 없다면
        alert("로그인해주세요!");
        router.push("/login");
      }
      setInit(true); // user 판명 끝
    });
  }, []);

  return <Wrapper>{init ? <Chatting /> : "로딩중입니다"}</Wrapper>;
}
