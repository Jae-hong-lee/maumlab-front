import styled from "@emotion/styled";
import useAuth from "../../src/common/utils/useAuth";
import BackButton from "../../src/common/Btn/BackBtn";

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
          채팅리스트
          <BackButton />
        </SidebarWrapper>

        <ChattingWrapper>채팅</ChattingWrapper>
      </ChatContainer>
    </Wrapper>
  );
}

// useAuth 추가.
export default useAuth(ChatPage);
