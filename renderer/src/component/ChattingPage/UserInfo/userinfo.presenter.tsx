import { Checkbox } from "@mui/material";
import * as UIS from "./userinfo.style";
import { IUserInfo } from "./userinfo.type";
import { Favorite, FavoriteBorder } from "@mui/icons-material";

export default function UserInfoUI(props: IUserInfo) {
  const label = { inputProps: { "aria-label": "Favorite Checkbox" } };

  return (
    <UIS.Wrapper>
      <UIS.ChatInfoTitle>{props.res[0]?.roomname}(닉네임)</UIS.ChatInfoTitle>
      {/* Favorite Btn */}
      <Checkbox
        {...label}
        onChange={props.handleChange}
        icon={<FavoriteBorder />}
        checkedIcon={<Favorite />}
      />
    </UIS.Wrapper>
  );
}
