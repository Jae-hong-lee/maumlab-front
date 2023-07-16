import { ChangeEvent } from "react";

export interface IUserInfo {
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  res: any;
  LoginUserList: any;
  checked: any;
}
