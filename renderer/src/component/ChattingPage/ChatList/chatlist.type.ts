import { ChangeEvent, Dispatch, SetStateAction } from "react";

export interface IChatlist {
  roomname: string;
  setRoomname: Dispatch<SetStateAction<string>>;
  onChangeText: (e: ChangeEvent<HTMLInputElement>) => void;

  open: boolean;
  setOpen: Dispatch<SetStateAction<Boolean>>;
  handleOpen: () => void;
  handleClose: () => void;
  checked: any[];
  setChecked: Dispatch<SetStateAction<number[]>>;
  handleToggle: (nickName: string) => () => void;
  onClickCreateRoom: () => void;

  userList: any;
}
