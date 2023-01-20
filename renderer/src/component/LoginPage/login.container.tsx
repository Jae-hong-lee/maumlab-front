import { useRouter } from "next/router";
import LoginUI from "./login.presenter";
// yup & react-hook-form
import { SubmitHandler } from "react-hook-form";
import { FormValues } from "../SignupPage/signup.type";
// firebase
import useAuth from "../../common/firebase/firebase.auth";

export default function LoginContainer() {
  const router = useRouter();
  const { Login } = useAuth();

  const onClickLogin: SubmitHandler<FormValues> = async (data: FormValues) => {
    await Login(data.email, data.password);
  };

  const SignupClick = () => {
    router.push("/signup");
  };

  return <LoginUI onClickLogin={onClickLogin} SignupClick={SignupClick} />;
}
