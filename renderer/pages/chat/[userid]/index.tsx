import styled from "@emotion/styled";

import { useRouter } from "next/router";
import CreateRoom from "../../../src/common/firebase/database/RoomData";
import NavbarContainer from "../../../src/component/ChattingPage/Navbar/navbar.container";
import FavoriteContainer from "../../../src/component/ChattingPage/Favorited/favorite.container";
import ChatListContainer from "../../../src/component/ChattingPage/ChatList/chatlist.container";
import useAuth from "../../../src/common/utils/useAuth";
import { useEffect, useState } from "react";
import MessagesContainer from "../../../src/component/ChattingPage/Messages/messages.container";
import MSInputContainer from "../../../src/component/ChattingPage/Messages/MessageInput/messageinput.container";
import UserInfoContainer from "../../../src/component/ChattingPage/UserInfo/userinfo.container";
import { useRecoilState } from "recoil";
import { LoginInfo } from "../../../src/common/recoil/userInfo";

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ChatContainer = styled.div`
  display: flex;
  overflow: hidden;
  border: 1px solid white;
  border-radius: 10px;
  width: 90%;
  height: 80%;
`;

const SidebarWrapper = styled.div`
  flex: 1;
  background-color: #00cb6a;
  color: #ddddf7;
`;

const ChattingWrapper = styled.div`
  flex: 2;
`;

const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: #dffcec;
  font-size: 48px;
  font-weight: 700;
`;

function ChatPage() {
  const { fetchUserList } = CreateRoom();
  const router = useRouter();

  const [List, setList] = useState([]);

  // test
  const [userInfo] = useRecoilState(LoginInfo);

  useEffect(() => {
    const fetchData = async () => {
      if (router.asPath.split("/")[2] === "[userid]") {
        return;
      }
      const FetchList = await fetchUserList(`${router.asPath.split("/")[2]}`);
      const json = [...FetchList];
      setList(json);
    };

    userInfo && fetchData();
  }, []);

  return (
    <Wrapper>
      <ChatContainer>
        <SidebarWrapper>
          <NavbarContainer />
          <FavoriteContainer />
          <ChatListContainer LoginUserList={List} />
        </SidebarWrapper>

        <ChattingWrapper>
          {router.asPath.split("/")[2].split("#")[1] ? (
            <>
              <UserInfoContainer LoginUserList={List} />
              <MessagesContainer />
              <MSInputContainer />
            </>
          ) : (
            <Title>Let's Get Started 🎉</Title>
          )}
        </ChattingWrapper>
      </ChatContainer>
    </Wrapper>
  );
}

export default useAuth(ChatPage);
