import { Avatar, AvatarGroup, IconButton } from "@mui/material";
import * as CLS from "./chatlist.style";
import { IChatlist } from "./chatlist.type";
import AddIcon from "@mui/icons-material/Add";

export default function ChatListUI(props: IChatlist) {
  return (
    <CLS.Wrapper>
      <CLS.HadderBox>
        <CLS.HadderText>Chat Room (3)</CLS.HadderText>
        <IconButton aria-label="add" color="primary">
          <AddIcon />
        </IconButton>
      </CLS.HadderBox>

      {/* 1:1 채팅 */}
      <CLS.UserChatInfo>
        <Avatar sx={{ bgcolor: "secondary.main", height: 50, width: 50 }} />
        <div>
          <CLS.UserName>닉네임</CLS.UserName>
          <CLS.LatestMessage>최근메세지</CLS.LatestMessage>
        </div>
      </CLS.UserChatInfo>

      <CLS.UserChatInfo>
        <Avatar sx={{ bgcolor: "secondary.main", height: 50, width: 50 }} />
        <div>
          <CLS.UserName>닉네임2</CLS.UserName>
          <CLS.LatestMessage>최근메세지2</CLS.LatestMessage>
        </div>
      </CLS.UserChatInfo>

      {/* 그룹채팅 */}
      <CLS.UserChatInfo>
        <AvatarGroup max={4}>
          <Avatar alt="Remy Sharp" />
          <Avatar alt="Travis Howard" />
          <Avatar alt="Cindy Baker" />
          {/* <Avatar alt="Agnes Walker" src="/static/images/avatar/4.jpg" /> */}
        </AvatarGroup>
        <div>
          <CLS.UserName>채팅방이름</CLS.UserName>
          <CLS.LatestMessage>최근메세지!!!</CLS.LatestMessage>
        </div>
      </CLS.UserChatInfo>
    </CLS.Wrapper>
  );
}
