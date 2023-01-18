import { useRouter } from "next/router";
import SignUpUI from "./signup.presenter";

export default function SignUpContainer() {
  const router = useRouter();

  const onClickSignup = () => {
    router.push("/chat/123");
  };

  return <SignUpUI onClickSignup={onClickSignup} />;
}
