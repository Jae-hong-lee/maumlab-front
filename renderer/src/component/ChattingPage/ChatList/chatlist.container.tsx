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
  const handleToggle = (uid: string) => () => {
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
    if (roomname === "" || checked.length === 0) {
      if (checked.length === 0) {
        console.log("채팅추가 대상이 없습니다.");
        return;
      } else if (roomname === "") {
        console.log("채팅방 이름을 정해주세요.");
        return;
      }
    }
    console.log("채팅방 생성");
    console.log(checked, roomname);

    // firebase
    const ChatID = UserInfo.uid + "," + checked;
    console.log(ChatID);
    try {
      const res = await getDoc(doc(db, "chats", ChatID));

      if (!res.exists()) {
        // 2. 사용자 채팅 생성 res 데이터가 없다면
        // chats 컬렉션 생성 messages 라는 객체를 담아서 (roomname, RoomId)
        try {
          await setDoc(doc(db, "chats", roomname), {
            RoomID: ChatID,
            messages: [],
          });
        } catch (error) {
          console.log("에러", error.message);
        }
      }
    } catch (error: any) {
      console.log("에러", error.message);
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
