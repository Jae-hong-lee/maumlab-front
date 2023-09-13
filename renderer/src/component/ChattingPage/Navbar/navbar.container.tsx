import { useRecoilState } from "recoil";
import NavbarUI from "./navbar.presenter";
import { LoginInfo } from "../../../common/recoil/userInfo";

export default function NavbarContainer() {
  const [userInfo] = useRecoilState(LoginInfo);

  return <NavbarUI userInfo={userInfo} />;
}
