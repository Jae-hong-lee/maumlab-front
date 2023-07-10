import { Checkbox } from "@mui/material";
import * as UIS from "./userinfo.style";
import { IUserInfo } from "./userinfo.type";
import { Favorite, FavoriteBorder } from "@mui/icons-material";
import { useState } from "react";
import { useRouter } from "next/router";

export default function UserInfoUI(props: IUserInfo) {
  const label = { inputProps: { "aria-label": "Favorite Checkbox" } };
  const [checked, setChecked] = useState(false);
  const router = useRouter();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
    console.log(checked);
  };

  console.log(router.asPath.split("/")[2].split("#")[1]);
  console.log(props.LoginUserList);

  return (
    <UIS.Wrapper>
      <UIS.ChatInfoTitle>채팅방이름(닉네임)</UIS.ChatInfoTitle>
      {/* Favorite Btn */}
      <Checkbox
        {...label}
        onChange={handleChange}
        icon={<FavoriteBorder />}
        checkedIcon={<Favorite />}
      />
    </UIS.Wrapper>
  );
}
