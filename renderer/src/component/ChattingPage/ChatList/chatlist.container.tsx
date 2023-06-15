import { ChangeEvent, useState } from "react";
import ChatListUI from "./chatlist.presenter";
import { useRouter } from "next/router";
import UserData from "../../../common/firebase/database/UserData";
import { useRecoilState } from "recoil";
import { LoginInfo } from "../../../common/recoil/userInfo";
import CreateRoom from "../../../common/firebase/database/RoomData";

export default function ChatListContainer() {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [checked, setChecked] = useState([]);
  const [roomname, setRoomname] = useState("");
  const [userList, setUserList] = useState([]);

  const [UserInfo] = useRecoilState(LoginInfo);
  const { fetchAllUser } = UserData();
  const { createPersonalChatRoom } = CreateRoom();

  // Modal Control
  const handleOpen = async () => {
    // 유저리스트 가져오기
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
  const handleToggle = (nickName: string) => () => {
    const currentIndex = checked.indexOf(nickName);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(nickName);
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
    const ChatRoomName = UserInfo.displayName + "," + checked;

    if (checked.length === 0) {
      console.log("채팅추가 대상이 없습니다.");
      return;
    }
    // 룸 이름 설정
    if (roomname === "") {
      if (checked.length > 1) {
        console.log("1:N 채팅방");
        console.log(checked, ChatRoomName);
      } else {
        console.log("1:1 채팅방", UserInfo.displayName, checked);

        let CreateRoom = await createPersonalChatRoom(
          UserInfo.displayName,
          checked.join("")
        );
        console.log(CreateRoom);
      }
    } else {
      if (checked.length > 1) {
        console.log("1:N 채팅방");
        console.log(checked, roomname);
      } else {
        console.log("1:1 채팅방");
        console.log(checked, roomname);
      }
    }

    console.log("채팅방 생성성공");
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
