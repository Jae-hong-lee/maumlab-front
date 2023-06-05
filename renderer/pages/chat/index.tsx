import styled from "@emotion/styled";
import useAuth from "../../src/common/utils/useAuth";

import NavbarContainer from "../../src/component/ChattingPage/Navbar/navbar.container";
import ChatListContainer from "../../src/component/ChattingPage/ChatList/chatlist.container";
import FavoriteContainer from "../../src/component/ChattingPage/Favorited/favorite.container";
import ChatPageId from "./[userid]";
import { useState } from "react";

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
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex: 2;
  background-color: #c4f4da;
  color: #c5c5c9;
`;

const Title = styled.a`
  font-size: 48px;
  font-weight: 700;
`;

function ChatPage() {
  // Test
  const [open, setOpen] = useState(false);
  return (
    <Wrapper>
      <ChatContainer>
        <SidebarWrapper>
          <NavbarContainer />
          <FavoriteContainer />
          <ChatListContainer />
        </SidebarWrapper>

        <ChattingWrapper>
          {open ? <Title>Let's Get Started 🎉</Title> : <ChatPageId />}
        </ChattingWrapper>
      </ChatContainer>
    </Wrapper>
  );
}

// useAuth 추가.
// export default useAuth(ChatPage);

export default ChatPage;
