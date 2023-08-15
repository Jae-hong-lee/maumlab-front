import { Avatar } from "@mui/material";
import * as MS from "./message.style";

export default function MessageUI(props: any) {
  console.log(sessionStorage.uid);
  console.log(props.id);
  return (
    <MS.Wrapper id={props.id}>
      <MS.MessageInfo>
        <Avatar
          sx={{ m: 1, bgcolor: "secondary.main", height: 40, width: 40 }}
        />
        <div>{props.displayName}</div>
      </MS.MessageInfo>

      <MS.ContextWrapper>
        <MS.MessageText id={props.id}>{props.text}</MS.MessageText>
        {/* <MS.ChatIMG src="/images/logo.png" alt="" /> */}
      </MS.ContextWrapper>
    </MS.Wrapper>
  );
}
