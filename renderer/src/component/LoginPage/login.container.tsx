import { useRouter } from "next/router";
import LoginUI from "./login.presenter";

export default function LoginContainer() {
  const router = useRouter();

  const onClickLogin = () => {
    console.log("로그인");
  };

  const SignupClick = () => {
    router.push("/signup");
  };

  return <LoginUI onClickLogin={onClickLogin} SignupClick={SignupClick} />;
}
