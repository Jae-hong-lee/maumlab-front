import { useRouter } from "next/router";
import SignUpUI from "./signup.presenter";
import { SignUpSchema } from "../../common/Validation/validation";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import AuthDataSource from "../../common/firebase/database/AuthData";

export default function SignUpContainer() {
  const { register, formState, handleSubmit } = useForm({
    resolver: yupResolver(SignUpSchema),
    mode: "onChange",
  });
  const router = useRouter();
  const { signup } = AuthDataSource();

  const onClickSignup = handleSubmit(async (userData: any) => {
    signup(userData.email, userData.password, userData.nickName);
    console.log("회원가입 완료!");
    router.replace("/login");
  });

  return (
    <SignUpUI
      register={register}
      formState={formState}
      onClickSignup={onClickSignup}
    />
  );
}
