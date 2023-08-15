import * as MS from "./messages.style";
import { IMessages } from "./messages.type";
import Message from "./message/message.presenter";

export default function MessagesUI(props: IMessages) {
  console.log(props.messages, "MessagesUI");
  return (
    <MS.Wrapper>
      {props.messages?.map((el: any, idx: number) => (
        <Message
          key={`message${el.id}${idx}`}
          id={el.senderID}
          text={el.text}
          displayName={el.senderNickName}
        />
      ))}
    </MS.Wrapper>
  );
}
