import { ISearch } from "./search.type";
import * as SS from "./search.style";
import { Avatar } from "@mui/material";

export default function SearchUI(props: ISearch) {
  return (
    <SS.Wrapper>
      <SS.SearchBox>
        <SS.SearchInput type="text" placeholder="유저찾기" />
      </SS.SearchBox>

      {/* 서치실패 */}
      <SS.SearchErr>닉네임을 확인해주세요!</SS.SearchErr>

      {/* 서치성공 */}
      <SS.SearchUserInfo>
        <Avatar sx={{ bgcolor: "secondary.main", height: 50, width: 50 }} />
        <SS.UserChatInfo>
          <span>검색한 이름을 가진 사람</span>
        </SS.UserChatInfo>
      </SS.SearchUserInfo>
    </SS.Wrapper>
  );
}
