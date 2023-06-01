import { Avatar } from "@mui/material";
import * as NS from "./navbar.style";
import { INavbar } from "./navbar.type";
import LogoutButton from "../../../common/Btn/logoutBtn";

export default function NavbarUI(props: INavbar) {
  return (
    <NS.Wrapper>
      <NS.User>
        <Avatar sx={{ m: 1 }} />
        <NS.NickName>{props.userInfo?.displayName}</NS.NickName>
      </NS.User>
      <LogoutButton />
    </NS.Wrapper>
  );
}
