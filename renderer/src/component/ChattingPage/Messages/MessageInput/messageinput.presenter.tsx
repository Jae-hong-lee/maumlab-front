import { Button } from "@mui/material";
import * as MIS from "./messageinput.style";
import { IInput } from "./messageinput.type";

export default function MSInputUI(props: IInput) {
  return (
    <MIS.Wrapper>
      <MIS.MessageInput
        type="text"
        value={props.text}
        onChange={props.onChangeText}
        placeholder="대화를 입력해주세요"
      />
      <MIS.MessageWrapper>
        <Button variant="contained" size="small" onClick={props.SendMessage}>
          보내기
        </Button>
      </MIS.MessageWrapper>
    </MIS.Wrapper>
  );
}
