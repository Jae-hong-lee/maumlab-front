import { ChangeEvent, useEffect, useState } from "react";
import UserInfoUI from "./userinfo.presenter";
import { useRouter } from "next/router";
import CreateRoom from "../../../common/firebase/database/RoomData";

export default function UserInfoContainer(props: any) {
  const { favoritedRoom, fetchUserInfo } = CreateRoom();
  const router = useRouter();
  const [checked, setChecked] = useState<any>(false);

  const res = props.LoginUserList.filter(
    (el: any) => el.uid === router.asPath.split("/")[2].split("#")[1]
  );

  useEffect(() => {
    const fetchData = async () => {
      const check = await fetchUserInfo(
        router.asPath.split("/")[2].split("#")[0],
        res[0]?.uid
      );
      setChecked(check);
    };
    fetchData();
  }, [res]);

  const onClickFavorited = async (event) => {
    await favoritedRoom(event.target.checked, router.asPath.split("/")[2], res);
    setChecked((prev: any) => !prev);
  };

  return (
    <UserInfoUI
      onClickFavorited={onClickFavorited}
      res={res}
      LoginUserList={props.LoginUserList}
      checked={checked}
    />
  );
}
