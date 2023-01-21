import styled from "@emotion/styled";
import ChatListContainer from "./ChatList/chatlist.container";
import MSInputContainer from "./Messages/MessageInput/messageinput.container";
import MessagesContainer from "./Messages/messages.container";
import NavbarContainer from "./Navbar/navbar.container";
import SearchContainer from "./Search/search.container";
import UserInfoContainer from "./UserInfo/userinfo.container";

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

const Chatting = () => {
  return (
    <ChatContainer>
      {/* 사이드 Wrapper */}
      <SidebarWrapper>
        <NavbarContainer />
        <ChatListContainer />
      </SidebarWrapper>
      {/* 채팅 Wrapper */}
      <ChattingWrapper>
        <UserInfoContainer />
        <MessagesContainer />
        <MSInputContainer />
      </ChattingWrapper>
    </ChatContainer>
  );
};

export default Chatting;
