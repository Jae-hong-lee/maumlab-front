import React from "react";
import * as FS from "./favorite.style";
import { Avatar } from "@mui/material";

export default function FavoritePresenter(props: any) {
  return (
    <FS.Wrapper>
      <FS.HadderText>⭐️ Favorited Room (3)</FS.HadderText>
      <div>
        {props.res?.map((el: any, idx: Number) => (
          <FS.RoomBox key={el.uid + idx} onClick={props.onClickFavorited}>
            <Avatar sx={{ bgcolor: "secondary.main", height: 50, width: 50 }} />
            <div>{el.roomname}</div>
          </FS.RoomBox>
        ))}
      </div>
    </FS.Wrapper>
  );
}
