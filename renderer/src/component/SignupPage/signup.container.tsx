import { useRouter } from "next/router";
import SignUpUI from "./signup.presenter";
// yup & react-hook-form
import { SubmitHandler } from "react-hook-form";
import { FormValues } from "./signup.type";
// firebase

import useAuth from "../../common/firebase/firebase.auth";

export default function SignUpContainer() {
  const router = useRouter();
  const { signup } = useAuth();

  const onClickSignup: SubmitHandler<FormValues> = async (data: FormValues) => {
    await signup(data.email, data.password);
    router.push("/login");
  };

  return <SignUpUI onClickSignup={onClickSignup} />;
}
