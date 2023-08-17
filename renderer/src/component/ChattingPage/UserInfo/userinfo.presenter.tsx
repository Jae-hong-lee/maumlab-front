import { Checkbox } from "@mui/material";
import * as UIS from "./userinfo.style";
import { IUserInfo } from "./userinfo.type";
import { Favorite, FavoriteBorder } from "@mui/icons-material";

export default function UserInfoUI(props: IUserInfo) {
  const label = { inputProps: { "aria-label": "Favorite Checkbox" } };

  return (
    <UIS.Wrapper>
      <UIS.ChatInfoTitle>
        {props.res[0]?.roomname} (
        {props.res[0]?.users.map((el: any) => ` ${el.nickName} `)})
      </UIS.ChatInfoTitle>
      {/* Favorite Btn */}
      <Checkbox
        {...label}
        checked={props.checked}
        onClick={props.onClickFavorited}
        icon={<FavoriteBorder />}
        checkedIcon={<Favorite />}
      />
    </UIS.Wrapper>
  );
}
