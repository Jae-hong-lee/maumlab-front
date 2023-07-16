import {
  Avatar,
  AvatarGroup,
  Box,
  Button,
  Checkbox,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  TextField,
  Typography,
} from "@mui/material";
import * as CLS from "./chatlist.style";
import { IChatlist } from "./chatlist.type";
import AddIcon from "@mui/icons-material/Add";
import { Modal } from "@mui/material";
import { ErrorText } from "../../../common/styles/ErrorMessage";

export default function ChatListUI(props: IChatlist) {
  return (
    <CLS.Wrapper>
      <CLS.HadderBox>
        <CLS.HadderText>Chat Room (3)</CLS.HadderText>
        {/* 채팅추가 */}
        <IconButton aria-label="add" color="primary" onClick={props.handleOpen}>
          <AddIcon />
        </IconButton>
        {/* 모달 */}
        <Modal
          open={props.open}
          onClose={props.handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={CLS.style}>
            <Typography id="modal-modal-title" variant="h4" component="h2">
              채팅방 생성하기
            </Typography>
            <Typography id="modal-modal-subtitle" variant="h6" component="h4">
              채팅방 추가할 상대를 선택해주세요! 👻
            </Typography>
            <TextField
              margin="normal"
              required
              fullWidth
              id="ChatRoomName"
              label="채팅방 제목"
              name="ChatRoomName"
              autoFocus
              onChange={props.onChangeText}
            />
            <ErrorText>Error</ErrorText>

            <Typography id="modal-modal-description" sx={{ m: 1 }}>
              유저목록
            </Typography>

            <List
              sx={{
                width: "100%",
                maxWidth: 360,
                overflow: "auto",
                maxHeight: 200,
              }}
            >
              {props.userList?.map((el: any) => {
                const labelId = `${el.uid}`;

                return (
                  <ListItem key={`chatList+${el.uid}`} disablePadding>
                    <ListItemButton
                      role={undefined}
                      onClick={props.handleToggle(el)}
                      dense
                    >
                      <ListItemIcon>
                        <Checkbox
                          edge="start"
                          checked={props.checkedUid.indexOf(el.uid) !== -1}
                          tabIndex={-1}
                          disableRipple
                          inputProps={{ "aria-labelledby": labelId }}
                        />
                      </ListItemIcon>
                      <ListItemText id={labelId} primary={`${el.nickName}`} />
                    </ListItemButton>
                  </ListItem>
                );
              })}
            </List>

            <Button variant="contained" onClick={props.onClickCreateRoom}>
              대화 추가하기
            </Button>
            <Button onClick={props.handleClose}>Close</Button>
          </Box>
        </Modal>
      </CLS.HadderBox>

      {/* 1:1 채팅 */}
      {props.LoginUserList.map((e: any, idx: number) => (
        <CLS.UserChatInfo
          onClick={() => {
            props.onClickSelectRoom(e);
          }}
          key={`userInfo+${e.uid}`}
        >
          <Avatar sx={{ bgcolor: "secondary.main", height: 50, width: 50 }} />
          <div>
            <CLS.UserName>{e.roomname}</CLS.UserName>
            <CLS.LatestMessage>{e.type}</CLS.LatestMessage>
          </div>
        </CLS.UserChatInfo>
      ))}
    </CLS.Wrapper>
  );
}
