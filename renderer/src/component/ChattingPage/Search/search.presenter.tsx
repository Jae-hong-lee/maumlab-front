import { ISearch, ChipData } from "./search.type";
import * as SS from "./search.style";
import { Avatar, Button, Chip, ListItem, Paper } from "@mui/material";

export default function SearchUI(props: ISearch) {
  return (
    <SS.Wrapper>
      <Paper
        sx={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          listStyle: "none",
          p: 0.5,
          m: 0,
        }}
        component="ul"
      >
        {props.chipData.map((el, index) => {
          return (
            <ListItem key={index}>
              <Chip label={el} onDelete={props.handleDelete(el)} />
            </ListItem>
          );
        })}
      </Paper>

      {props.chatUser
        .map((el: any) => el.email)
        .map((el2: string, index: number) => (
          <div key={index}>
            {el2 === sessionStorage.email ? (
              <></>
            ) : (
              <SS.SearchUserInfo
                onClick={() => {
                  props.onClickUser(el2);
                }}
              >
                <Avatar sx={{ height: 50, width: 50 }} />
                <SS.UserChatInfo>
                  <span>{el2}</span>
                </SS.UserChatInfo>
              </SS.SearchUserInfo>
            )}
          </div>
        ))}
      <Button
        onClick={() => {
          props.onClickSelect(props.chipData);
        }}
      >
        채팅추가하기
      </Button>
    </SS.Wrapper>
  );
}
