import { IconButton } from "@mui/material";
import * as UIS from "./userinfo.style";
import { IUserInfo } from "./userinfo.type";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
export default function UserInfoUI(props: IUserInfo) {
  return (
    <UIS.Wrapper>
      <UIS.ChatInfoTitle>채팅방이름(닉네임)</UIS.ChatInfoTitle>
      {/* 변화주기 */}
      <IconButton aria-label="favorited" color="primary">
        <FavoriteIcon />
      </IconButton>
      <IconButton aria-label="favorited" color="primary">
        <FavoriteBorderIcon />
      </IconButton>
    </UIS.Wrapper>
  );
}
