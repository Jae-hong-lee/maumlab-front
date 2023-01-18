import { Avatar, Box, Button, TextField, Typography } from "@mui/material";
import BackButton from "../../common/Btn/BackBtn";
import * as LS from "./login.style";
import { ILogin } from "./login.type";

export default function LoginUI(props: ILogin) {
  return (
    <LS.Wrapper>
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }} />
        <Typography component="h1" variant="h4">
          로그인
        </Typography>

        <Box component="form" noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="이메일"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="비밀번호"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          {/* 로그인 버튼 타입수정하기 */}
          <Button
            type="button"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            onClick={props.onClickLogin}
          >
            로그인하기
          </Button>
        </Box>
        <BackButton />
        <Button onClick={props.SignupClick}>회원가입 하러가기</Button>
      </Box>
    </LS.Wrapper>
  );
}
