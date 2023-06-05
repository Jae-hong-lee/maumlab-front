import { ChangeEvent, useState } from "react";
import ChatListUI from "./chatlist.presenter";

export default function ChatListContainer() {
  const [open, setOpen] = useState(false);
  const [checked, setChecked] = useState([0]);
  const [roomname, setRoomname] = useState("");

  // Modal Control
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // UserList CheckBox
  const handleToggle = (value: number) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
    console.log(checked);
  };

  // CreateRoomTitle
  const onChangeText = (e: ChangeEvent<HTMLInputElement>) => {
    setRoomname(e.target.value);
  };

  // CreateRoom Btn
  const onClickCreateRoom = () => {
    // if (roomname === "" && checked.length === 0) {
    //   return;
    // }
    console.log(checked, roomname);
    if (checked.length === 0) {
      console.log("채팅추가 대상이 없습니다.");
    }
    handleClose();
  };

  return (
    <ChatListUI
      roomname={roomname}
      setRoomname={setRoomname}
      onChangeText={onChangeText}
      open={open}
      setOpen={setOpen}
      handleOpen={handleOpen}
      handleClose={handleClose}
      checked={checked}
      setChecked={setChecked}
      onClickCreateRoom={onClickCreateRoom}
      handleToggle={handleToggle}
    />
  );
}
