import { FormValues } from "../SignupPage/signup.type";

export interface ILogin {
  SignupClick: () => void;
  onClickLogin: (data: FormValues) => void;
}
