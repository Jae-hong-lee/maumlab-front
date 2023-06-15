import { ChangeEvent, useCallback, useMemo, useState } from "react";
import ChatListUI from "./chatlist.presenter";
import { useRouter } from "next/router";
import UserData from "../../../common/firebase/database/UserData";
import { useRecoilState } from "recoil";
import { LoginInfo } from "../../../common/recoil/userInfo";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "../../../common/firebase/firebase";

export default function ChatListContainer() {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [checked, setChecked] = useState([]);
  const [roomname, setRoomname] = useState("");
  const [userList, setUserList] = useState([]);

  const [UserInfo] = useRecoilState(LoginInfo);
  const { fetchAllUser } = UserData();

  // Modal Control

  const handleOpen = async () => {
    const userList = await fetchAllUser(UserInfo.uid);
    setUserList(userList);
    setOpen(true);
  };

  const handleClose = () => {
    setRoomname("");
    setChecked([]);
    setOpen(false);
  };

  // UserList CheckBox
  const handleToggle = (uid: string, nickName: string) => () => {
    console.log(uid, nickName);

    const currentIndex = checked.indexOf(uid);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(uid);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  // CreateRoomTitle
  const onChangeText = (e: ChangeEvent<HTMLInputElement>) => {
    setRoomname(e.target.value);
  };

  // CreateRoom Btn
  const onClickCreateRoom = async () => {
    console.log(UserInfo.uid, checked);

    const ChatID = UserInfo.uid + "@" + checked;
    console.log(ChatID);

    if (checked.length === 0) {
      console.log("채팅추가 대상이 없습니다.");
      return;
    } else if (roomname === "") {
      // setRoomname(ChatID);
      console.log("채팅방 이름을 정해주세요.");
      return;
    } else if (checked.length > 1) {
      console.log("1:N 채팅방");
    }

    console.log("채팅방 생성");
    console.log(checked, roomname);

    // firebase Create Room

    // router.push(`/chat/${UserInfo.uid}`);

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
