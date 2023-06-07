import { ChangeEvent, useEffect, useMemo, useState } from "react";
import ChatListUI from "./chatlist.presenter";
import { useRouter } from "next/router";
import UserData from "../../../common/firebase/database/UserData";
import { useRecoilState } from "recoil";
import { LoginInfo } from "../../../common/recoil/userInfo";

export default function ChatListContainer() {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [checked, setChecked] = useState([0]);
  const [roomname, setRoomname] = useState("");
  const [userList, setUserList] = useState([]);

  const [UserInfo] = useRecoilState(LoginInfo);
  const { fetchAllUser } = UserData();

  // Modal Control
  const handleOpen = async () => {
    const res = await fetchAllUser(UserInfo.uid);
    setUserList(res);

    setOpen(true);
  };
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

  // *Router
  const onClickRoom = (room: any) => {
    router.push(`/chat/${room.uid}`);
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
      userList={userList}
    />
  );
}
