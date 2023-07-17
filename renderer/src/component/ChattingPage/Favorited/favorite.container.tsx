import React, { useEffect, useState } from "react";
import FavoritePresenter from "./favorite.presenter";
import CreateRoom from "../../../common/firebase/database/RoomData";
import { useRouter } from "next/router";

export default function FavoriteContainer(props: any) {
  const { fetchUserInfo } = CreateRoom();
  const router = useRouter();
  const [favoritedList, setFavoritedList] = useState<undefined | any>();

  useEffect(() => {
    const fetchData = async () => {
      const check = await fetchUserInfo(
        router.asPath.split("/")[2].split("#")[0],
        undefined
      );
      setFavoritedList(check);
    };
    fetchData();
  }, [router]);

  const onClickFavorited = () => {
    console.log("onClickRoom");
  };

  const res = props.LoginUserList.filter(
    (el: any) => el.uid === favoritedList?.id
  );

  return (
    <FavoritePresenter
      res={res}
      LoginUserList={props.LoginUserList}
      favoritedList={favoritedList}
      onClickFavorited={onClickFavorited}
    />
  );
}
