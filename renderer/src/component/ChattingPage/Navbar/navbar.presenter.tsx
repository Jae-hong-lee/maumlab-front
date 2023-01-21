import { Avatar, Box, Button, Modal, Typography } from "@mui/material";
import SearchContainer from "../Search/search.container";
import * as NS from "./navbar.style";
import { INavbar } from "./navbar.type";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function NavbarUI(props: INavbar) {
  return (
    <NS.Wrapper>
      <NS.User>
        <Avatar sx={{ m: 1, height: 24, width: 24 }} />
        <NS.NickName>{sessionStorage.email}</NS.NickName>
      </NS.User>

      <Button onClick={props.handleModal}>채팅걸기</Button>
      {/* 모달창  */}
      <Modal
        open={props.open}
        onClose={props.handleModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            채팅걸기
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            채팅을 걸어볼 상대를 추가해주세요.
          </Typography>
          {/* 채팅목록 */}
          <SearchContainer />
        </Box>
      </Modal>
    </NS.Wrapper>
  );
}
