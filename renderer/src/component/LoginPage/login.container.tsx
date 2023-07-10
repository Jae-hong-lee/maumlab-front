import { useRouter } from "next/router";
import LoginUI from "./login.presenter";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { loginSchema } from "../../common/utils/validation";
import AuthDataSource from "../../common/firebase/database/AuthData";

export default function LoginContainer() {
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(loginSchema),
    mode: "onChange",
  });
  const router = useRouter();
  const { login } = AuthDataSource();

  const onClickLogin = handleSubmit(async (userData: any) => {
    try {
      const res = await login(userData.email, userData.password);
      router.push(`/chat/${res}`);
      // router.push("/chat");
    } catch (e) {
      if (e instanceof Error) {
        alert(e.message);
      }
    }
  });

  return (
    <LoginUI
      formState={formState}
      register={register}
      onClickLogin={onClickLogin}
    />
  );
}
