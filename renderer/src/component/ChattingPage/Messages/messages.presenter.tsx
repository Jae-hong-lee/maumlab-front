import * as MS from "./messages.style";
import { IMessages } from "./messages.type";
import Message from "./message/message.presenter";

export default function MessagesUI(props: IMessages) {
  return (
    <MS.Wrapper>
      {/* map */}
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
    </MS.Wrapper>
  );
}
