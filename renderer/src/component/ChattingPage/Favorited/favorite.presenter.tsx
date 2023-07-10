import React from "react";
import * as FS from "./favorite.style";
import { Avatar } from "@mui/material";

export default function FavoritePresenter() {
  const ExRoom = ["1번방", "2번방", "3번방"];
  return (
    <FS.Wrapper>
      <FS.HadderText>⭐️ Favorited Room (3)</FS.HadderText>
      <div>
        {ExRoom.map((el, idx) => (
          <FS.RoomBox key={el + idx}>
            <Avatar sx={{ bgcolor: "secondary.main", height: 50, width: 50 }} />
            <div>{el}</div>
          </FS.RoomBox>
        ))}
      </div>
    </FS.Wrapper>
  );
}
