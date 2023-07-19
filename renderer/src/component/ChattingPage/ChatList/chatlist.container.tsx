import { ChangeEvent, useState } from "react";
import ChatListUI from "./chatlist.presenter";
import { useRouter } from "next/router";
import UserData from "../../../common/firebase/database/UserData";
import { useRecoilState } from "recoil";
import { LoginInfo } from "../../../common/recoil/userInfo";
import CreateRoom from "../../../common/firebase/database/RoomData";
import { IListContainer } from "./chatlist.type";

export default function ChatListContainer(props: IListContainer) {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [userList, setUserList] = useState([]);

  const [checkedNick, setCheckedNick] = useState([]);
  const [checkedUid, setCheckedUid] = useState([]);
  const [roomname, setRoomname] = useState("");

  const [UserInfo] = useRecoilState(LoginInfo);
  const { fetchAllUser } = UserData();
  const { createPersonalChatRoom, createOpenChatRoom } = CreateRoom();

  // Modal Control
  const handleOpen = async () => {
    // 유저리스트 가져오기
    const userList = await fetchAllUser(UserInfo.uid);
    setUserList(userList);
    setOpen(true);
  };
  const handleClose = () => {
    setRoomname("");
    setCheckedUid([]);
    setCheckedNick([]);
    setOpen(false);
  };

  // UserList CheckBox
  const handleToggle = (el: any) => () => {
    const currentIndex = checkedUid.indexOf(el.uid);
    const currentNick = checkedNick.indexOf(el.nickName);

    const newChecked = [...checkedUid];
    const newNameChecked = [...checkedNick];

    if (!checkedUid.includes(el.uid)) {
      newChecked.push(el.uid);
      newNameChecked.push(el.nickName);
    } else {
      newChecked.splice(currentIndex, 1);
      newNameChecked.splice(currentNick, 1);
    }
    setCheckedUid(newChecked);
    setCheckedNick(newNameChecked);
  };

  // CreateRoomTitle
  const onChangeText = (e: ChangeEvent<HTMLInputElement>) => {
    setRoomname(e.target.value);
  };

  // CreateRoom Btn
  const onClickCreateRoom = async () => {
    const ChatRoomName = UserInfo.displayName + "," + checkedNick.join();

    if (checkedUid.length === 0) {
      console.log("채팅추가 대상이 없습니다.");
      return;
    }
    // 룸 이름 설정
    if (roomname === "") {
      if (checkedUid.length > 1) {
        console.log("1:N 채팅방");
        let CreateOpenChat = await createOpenChatRoom(
          checkedUid,
          ChatRoomName,
          UserInfo.uid
        );
        console.log(CreateOpenChat);
      } else {
        let CreateRoom = await createPersonalChatRoom(
          UserInfo.uid,
          checkedUid.join(""),
          ChatRoomName
        );
        console.log(CreateRoom);
      }
    } else {
      if (checkedUid.length > 1) {
        console.log("1:N 채팅방");
        let CreateOpenChat = await createOpenChatRoom(
          checkedUid,
          roomname,
          UserInfo.uid
        );
        console.log(CreateOpenChat);
      } else {
        let CreateRoom = await createPersonalChatRoom(
          UserInfo.uid,
          checkedUid.join(""),
          roomname
        );
        console.log(CreateRoom);
      }
    }
    console.log("채팅방 생성성공");
    // router.push(`/chat/${UserInfo.uid}`);

    handleClose();
  };

  // *Router
  const onClickSelectRoom = (uid: string) => {
    router.push(`/chat/${UserInfo.uid + "#" + uid}`);
  };

  return (
    <ChatListUI
      onClickSelectRoom={onClickSelectRoom}
      roomname={roomname}
      setRoomname={setRoomname}
      onChangeText={onChangeText}
      open={open}
      setOpen={setOpen}
      handleOpen={handleOpen}
      handleClose={handleClose}
      checkedUid={checkedUid}
      setCheckedUid={setCheckedUid}
      onClickCreateRoom={onClickCreateRoom}
      handleToggle={handleToggle}
      userList={userList}
      LoginUserList={props.LoginUserList}
    />
  );
}
