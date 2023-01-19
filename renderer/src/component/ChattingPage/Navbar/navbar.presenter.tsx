import { Avatar } from "@mui/material";
import BackButton from "../../../common/Btn/BackBtn";
import * as NS from "./navbar.style";
import { INavbar } from "./navbar.type";

export default function NavbarUI(props: INavbar) {
  return (
    <NS.Wrapper>
      <NS.User>
        <Avatar sx={{ m: 1, height: 24, width: 24 }} />
        <NS.NickName>회원이름</NS.NickName>
      </NS.User>
      <BackButton />
    </NS.Wrapper>
  );
}
