import { ChangeEvent, useState } from "react";
import UserInfoUI from "./userinfo.presenter";
import { IUserInfo } from "./userinfo.type";
import { useRouter } from "next/router";
import CreateRoom from "../../../common/firebase/database/RoomData";

export default function UserInfoContainer(props: IUserInfo) {
  const { favoritedRoom } = CreateRoom();
  const router = useRouter();
  const [checked, setChecked] = useState();

  const handleChange = async (event: ChangeEvent<HTMLInputElement>) => {
    const res = await favoritedRoom(
      event.target.checked,
      router.asPath.split("/")[2]
    );
    console.log(res);
  };

  const res = props.LoginUserList.filter(
    (el: any) => el.uid === router.asPath.split("/")[2].split("#")[1]
  );

  return (
    <UserInfoUI
      handleChange={handleChange}
      res={res}
      LoginUserList={props.LoginUserList}
    />
  );
}
