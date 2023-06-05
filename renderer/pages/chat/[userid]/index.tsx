import styled from "@emotion/styled";
import UserInfoContainer from "../../../src/component/ChattingPage/UserInfo/userinfo.container";
import MessagesContainer from "../../../src/component/ChattingPage/Messages/messages.container";
import MSInputContainer from "../../../src/component/ChattingPage/Messages/MessageInput/messageinput.container";
import useAuth from "../../../src/common/utils/useAuth";

const ChatContainer = styled.div`
  display: flex;
  overflow: hidden;
  width: 100%;
  height: 100%;
`;

const ChattingWrapper = styled.div`
  flex: 2;
`;

function ChatPageId() {
  return (
    <ChatContainer>
      <ChattingWrapper>
        <UserInfoContainer />
        <MessagesContainer />
        <MSInputContainer />
      </ChattingWrapper>
    </ChatContainer>
  );
}

// useAuth 추가.
// export default useAuth(ChatPageId);

export default ChatPageId;
