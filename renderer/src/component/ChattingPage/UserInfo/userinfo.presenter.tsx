import * as UIS from "./userinfo.style";
import { IUserInfo } from "./userinfo.type";

export default function UserInfoUI(props: IUserInfo) {
  return (
    <UIS.Wrapper>
      <UIS.ChatInfoTitle>상대방 닉네임</UIS.ChatInfoTitle>
    </UIS.Wrapper>
  );
}
