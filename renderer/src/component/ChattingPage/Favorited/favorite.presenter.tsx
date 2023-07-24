import React from "react";
import * as FS from "./favorite.style";
import { Avatar } from "@mui/material";

export default function FavoritePresenter(props: any) {
  return (
    <FS.Wrapper>
      <FS.HadderText>
        ⭐️ Favorited Room ({props.favoritedList?.length})
      </FS.HadderText>
      {props.favoritedList?.map((e, idx) => (
        <FS.UserChatInfo
          onClick={() => {
            props.onClickFavorited(e.id);
          }}
          key={`userInfo+${e.id}`}
        >
          <Avatar sx={{ bgcolor: "secondary.main", height: 50, width: 50 }} />
          <div>
            <FS.UserName>{e.data[0]}</FS.UserName>
            <FS.LatestMessage>{e.data[1]}</FS.LatestMessage>
          </div>
        </FS.UserChatInfo>
      ))}
      {/* {props.res?.map((e: any, idx: number) => (
        <FS.UserChatInfo
          onClick={() => {
            props.onClickFavorited(e.uid);
          }}
          key={`userInfo+${e.uid}`}
        >
          <Avatar sx={{ bgcolor: "secondary.main", height: 50, width: 50 }} />
          <div>
            <FS.UserName>{e.roomname}</FS.UserName>
            <FS.LatestMessage>{e.type}</FS.LatestMessage>
          </div>
        </FS.UserChatInfo>
      ))} */}
    </FS.Wrapper>
  );
}
