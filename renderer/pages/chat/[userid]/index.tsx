import styled from "@emotion/styled";
import BackButton from "../../../src/common/Btn/BackBtn";
import NavbarContainer from "../../../src/component/ChattingPage/Navbar/navbar.container";

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
  display: flex;
  flex: 1;
  background-color: #00cb6a;
  color: #ddddf7;
`;

const ChattingWrapper = styled.div`
  display: flex;
  /* background-color: #4dc885; */
  flex: 2;
`;

export default function ChatPage() {
  return (
    <Wrapper>
      <ChatContainer>
        <SidebarWrapper>
          <NavbarContainer />
          <br />
          SearchBar
          <br />
          ChatList
        </SidebarWrapper>
        <ChattingWrapper>UserInfo Messages MessageInput</ChattingWrapper>
      </ChatContainer>
      <BackButton />
    </Wrapper>
  );
}
