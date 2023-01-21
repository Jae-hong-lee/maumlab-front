import { Avatar, AvatarGroup } from "@mui/material";
import * as CLS from "./chatlist.style";
import { IChatlist } from "./chatlist.type";

export default function ChatListUI(props: IChatlist) {
  return (
    <CLS.Wrapper>
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
      {/* <CLS.UserChatInfo>
        <AvatarGroup max={4}>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
          <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
          <Avatar alt="Agnes Walker" src="/static/images/avatar/4.jpg" />
          <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
        </AvatarGroup>
        <CLS.LatestMessage>최근메세지!!!</CLS.LatestMessage>
      </CLS.UserChatInfo> */}
    </CLS.Wrapper>
  );
}
