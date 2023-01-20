import { atom } from "recoil";

export const ChatUserInfo = atom({
  key: "uid",
  default: {
    chatId: null,
    userInfo: {
      // lastmessage: "",
      // userinfo
    },
  },
});
