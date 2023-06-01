import { Button } from "@mui/material";
import { useRouter } from "next/router";
import { getAuth, signOut } from "firebase/auth";

export default function LogoutButton() {
  const router = useRouter();

  // 로그아웃
  const logoutClick = async () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        router.push("/login");
      })
      .catch((error) => {
        // An error happened.
        alert(error.message);
      });
  };

  return <Button onClick={logoutClick}>로그아웃</Button>;
}
