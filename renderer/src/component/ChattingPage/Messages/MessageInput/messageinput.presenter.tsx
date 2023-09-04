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
        <input
          type="file"
          style={{ display: "none" }}
          id="file"
          onChange={props.onChangeIMG}
        />
        <label htmlFor="file">
          {props.img && <MIS.DataImg src={props.img} />}
          {props.img ? <></> : <img src={"/images/ImgIcon.png"} />}
          {/* <img src={"/images/ImgIcon.png"} /> */}
        </label>
        <Button variant="contained" size="small" onClick={props.SendMessage}>
          보내기
        </Button>
      </MIS.MessageWrapper>
    </MIS.Wrapper>
  );
}
