import React, { useEffect, useState } from "react";
import FavoritePresenter from "./favorite.presenter";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { LoginInfo } from "../../../common/recoil/userInfo";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../../../common/firebase/firebase";

export default function FavoriteContainer() {
  const router = useRouter();
  const [favoritedList, setFavoritedList] = useState<undefined | any>();
  const [UserInfo] = useRecoilState(LoginInfo);

  useEffect(() => {
    const fetchFavoritedListData = async () => {
      const unsub = onSnapshot(
        doc(db, "Users", `${router.asPath.split("/")[2].split("#")[0]}`),
        (doc: any) => {
          setFavoritedList(doc.data().Favorited);
        }
      );
    };
    fetchFavoritedListData();
  }, [router]);

  const onClickFavorited = (uid: string) => {
    router.push(`/chat/${UserInfo.uid + "#" + uid}`);
  };

  return (
    <FavoritePresenter
      favoritedList={favoritedList}
      onClickFavorited={onClickFavorited}
    />
  );
}
