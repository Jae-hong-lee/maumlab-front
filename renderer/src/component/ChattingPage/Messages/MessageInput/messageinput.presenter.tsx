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
        {/* 이미지를 넣는다면 이미지아이콘과 input 태그 설정하기 */}
        <input
          type="file"
          style={{ display: "none" }}
          id="file"
          // onChange={props.onChangeIMG}
        />
        <label htmlFor="file">
          {/* {props.img && <MIS.DataImg src={props.img} />} */}
          {/* {props.img ? <></> : <img src={"/chatting/ImgIcon.png"} />} */}
          <img src={"/images/ImgIcon.png"} />
        </label>
        <Button variant="contained" size="small" onClick={props.SubmitMessage}>
          보내기
        </Button>
      </MIS.MessageWrapper>
    </MIS.Wrapper>
  );
}
