import { Avatar } from "@mui/material";
import * as MS from "./message.style";

export default function MessageUI(props) {
  return (
    <MS.Wrapper>
      <MS.MessageInfo>
        <Avatar
          sx={{ m: 1, bgcolor: "secondary.main", height: 40, width: 40 }}
        />
        <div>상대방 닉네임</div>
      </MS.MessageInfo>

      <MS.ContextWrapper>
        <MS.MessageText>메세지내용</MS.MessageText>
        <MS.ChatIMG src="/images/logo.png" alt="" />
      </MS.ContextWrapper>
    </MS.Wrapper>
  );
}
