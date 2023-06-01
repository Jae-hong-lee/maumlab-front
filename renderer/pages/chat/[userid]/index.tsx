import styled from "@emotion/styled";
import NavbarContainer from "../../../src/component/ChattingPage/Navbar/navbar.container";
import FavoriteContainer from "../../../src/component/ChattingPage/Favorited/favorite.container";
import ChatListContainer from "../../../src/component/ChattingPage/ChatList/chatlist.container";
import UserInfoContainer from "../../../src/component/ChattingPage/UserInfo/userinfo.container";
import MessagesContainer from "../../../src/component/ChattingPage/Messages/messages.container";
import MSInputContainer from "../../../src/component/ChattingPage/Messages/MessageInput/messageinput.container";
import useAuth from "../../../src/common/utils/useAuth";

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

function ChatPage() {
  return (
    <Wrapper>
      <ChatContainer>
        <SidebarWrapper>
          <NavbarContainer />
          {/* <SearchContainer /> */}
          <FavoriteContainer />
          <ChatListContainer />
        </SidebarWrapper>

        <ChattingWrapper>
          <UserInfoContainer />
          <MessagesContainer />
          <MSInputContainer />
        </ChattingWrapper>
      </ChatContainer>
    </Wrapper>
  );
}

// useAuth 추가.
export default useAuth(ChatPage);

// export default ChatPage;
