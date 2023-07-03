import { ChangeEvent, Dispatch, SetStateAction } from "react";

export interface IListContainer {
  LoginUserList: any;
}
export interface IChatlist {
  roomname: string;
  setRoomname: Dispatch<SetStateAction<string>>;
  onChangeText: (e: ChangeEvent<HTMLInputElement>) => void;

  open: boolean;
  setOpen: Dispatch<SetStateAction<Boolean>>;
  handleOpen: () => void;
  handleClose: () => void;
  checkedUid: any[];
  setCheckedUid: Dispatch<SetStateAction<number[]>>;
  handleToggle: (nickName: string) => () => void;
  onClickCreateRoom: () => void;

  userList: any;
  LoginUserList: any;
}
