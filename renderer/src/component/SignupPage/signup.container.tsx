import SignUpUI from "./signup.presenter";
// yup & react-hook-form
import { SubmitHandler } from "react-hook-form";
import { FormValues } from "./signup.type";
// firebase
import useAuth from "../../common/firebase/firebase.auth";

export default function SignUpContainer() {
  const { Signup } = useAuth();

  const onClickSignup: SubmitHandler<FormValues> = async (data: FormValues) => {
    await Signup(data.email, data.password);
  };

  return <SignUpUI onClickSignup={onClickSignup} />;
}
