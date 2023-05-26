import styled from "@emotion/styled";
import useAuth from "../../src/common/utils/useAuth";
import BackButton from "../../src/common/Btn/BackBtn";
import { useRecoilState } from "recoil";
import { LoginInfo } from "../../src/common/recoil/userInfo";
// import { Avatar } from "@mui/material";
import NavbarContainer from "../../src/component/ChattingPage/Navbar/navbar.container";
import SearchContainer from "../../src/component/ChattingPage/Search/search.container";
import ChatListContainer from "../../src/component/ChattingPage/ChatList/chatlist.container";
import UserInfoContainer from "../../src/component/ChattingPage/UserInfo/userinfo.container";
import MessagesContainer from "../../src/component/ChattingPage/Messages/messages.container";
import MSInputContainer from "../../src/component/ChattingPage/Messages/MessageInput/messageinput.container";

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

// const UserInfoWrapper = styled.div`
//   display: flex;
//   flex-direction: row;
//   align-items: center;
// `;

function ChatPage() {
  const [userInfo] = useRecoilState<any>(LoginInfo);

  return (
    <Wrapper>
      <ChatContainer>
        <SidebarWrapper>
          <NavbarContainer />
          <SearchContainer />
          <ChatListContainer />
        </SidebarWrapper>

        <ChattingWrapper>
          <UserInfoContainer />
          <MessagesContainer />
          <MSInputContainer />
        </ChattingWrapper>
      </ChatContainer>
      {/* <ChatContainer>
        <SidebarWrapper>
          <h1>Chat App</h1>
          <BackButton />
          <UserInfoWrapper>
            <Avatar sx={{ m: 1 }} />
            {userInfo.displayName}
          </UserInfoWrapper>
        </SidebarWrapper>

        <ChattingWrapper>채팅</ChattingWrapper>
      </ChatContainer> */}
    </Wrapper>
  );
}

// useAuth 추가.
export default useAuth(ChatPage);
