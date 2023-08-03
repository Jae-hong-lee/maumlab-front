import * as MS from "./messages.style";
import { IMessages } from "./messages.type";
import Message from "./message/message.presenter";

export default function MessagesUI(props: IMessages) {
  return (
    <MS.Wrapper>
      {props.messages?.map((el: any) => (
        <Message key={`message+${el.id}`} id={el.id} text={el.text} />
      ))}

      {/* <Message /> */}
    </MS.Wrapper>
  );
}
