import { ChangeEvent, useState } from "react";
import UserInfoUI from "./userinfo.presenter";
import { useRouter } from "next/router";
import CreateRoom from "../../../common/firebase/database/RoomData";

export default function UserInfoContainer(props: any) {
  const { favoritedRoom } = CreateRoom();
  const router = useRouter();
  const [checked, setChecked] = useState(false);

  const handleChange = async (event: ChangeEvent<HTMLInputElement>) => {
    await favoritedRoom(event.target.checked, router.asPath.split("/")[2]);
    setChecked((prev) => !prev);
    console.log(checked);
  };

  const res = props.LoginUserList.filter(
    (el: any) => el.uid === router.asPath.split("/")[2].split("#")[1]
  );

  return (
    <UserInfoUI
      handleChange={handleChange}
      res={res}
      LoginUserList={props.LoginUserList}
      checked={checked}
    />
  );
}
