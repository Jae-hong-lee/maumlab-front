import { Button } from "@mui/material";
import * as UIS from "./userinfo.style";
import { IUserInfo } from "./userinfo.type";
import BackButton from "../../../common/Btn/BackBtn";

export default function UserInfoUI(props: IUserInfo) {
  return (
    <UIS.Wrapper>
      <UIS.ChatInfoTitle>상대방 닉네임</UIS.ChatInfoTitle>
      <BackButton />
    </UIS.Wrapper>
  );
}
