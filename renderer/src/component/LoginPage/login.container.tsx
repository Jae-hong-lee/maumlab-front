import { useRouter } from "next/router";
import LoginUI from "./login.presenter";

export default function LoginContainer() {
  const router = useRouter();

  const onClickLogin = () => {
    // 수정하기
    router.push("/chat/123");
  };

  const SignupClick = () => {
    router.push("/signup");
  };

  return <LoginUI onClickLogin={onClickLogin} SignupClick={SignupClick} />;
}
