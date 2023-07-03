import { atom } from "recoil";
// import { v1 } from "uuid";

export const LoginInfo = atom({
  key: "uid",
  default: {
    uid: String,
    displayName: String,
  },
});
