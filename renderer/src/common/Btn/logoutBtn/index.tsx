import { Button } from "@mui/material";
import { getAuth, signOut } from "firebase/auth";

export default function LogoutButton() {
  // 로그아웃
  const logoutClick = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        // console.log("로그아웃");
      })
      .catch((error) => {
        // An error happened.
        console.log(error.message);
      });
  };

  return <Button onClick={logoutClick}>로그아웃</Button>;
}
