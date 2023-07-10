import UserInfoUI from "./userinfo.presenter";
import { IUserInfo } from "./userinfo.type";

export default function UserInfoContainer(props: IUserInfo) {
  return <UserInfoUI LoginUserList={props.LoginUserList} />;
}
