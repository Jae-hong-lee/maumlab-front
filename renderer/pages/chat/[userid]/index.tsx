import styled from "@emotion/styled";
import BackButton from "../../../src/common/Btn/BackBtn";
import ChatListContainer from "../../../src/component/ChattingPage/ChatList/chatlist.container";
import MSInputContainer from "../../../src/component/ChattingPage/Messages/MessageInput/messageinput.container";
import MessagesContainer from "../../../src/component/ChattingPage/Messages/messages.container";
import NavbarContainer from "../../../src/component/ChattingPage/Navbar/navbar.container";
import SearchContainer from "../../../src/component/ChattingPage/Search/search.container";
import UserInfoContainer from "../../../src/component/ChattingPage/UserInfo/userinfo.container";

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
  /* background-color: #dffcec; */
  flex: 2;
`;

export default function ChatPage() {
  return (
    <Wrapper>
      <ChatContainer>
        {/* 사이드 Wrapper */}
        <SidebarWrapper>
          <NavbarContainer />
          <SearchContainer />
          <ChatListContainer />
        </SidebarWrapper>
        {/* 채팅 Wrapper */}
        <ChattingWrapper>
          <UserInfoContainer />
          <MessagesContainer />
          <MSInputContainer />
        </ChattingWrapper>
      </ChatContainer>
    </Wrapper>
  );
}
