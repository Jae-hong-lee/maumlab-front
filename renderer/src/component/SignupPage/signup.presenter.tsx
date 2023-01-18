import { Box, Button, TextField, Typography } from "@mui/material";
import BackButton from "../../common/Btn/BackBtn";
import * as SS from "./signup.style";
import { ISignup } from "./signup.type";

export default function SignUpUI(props: ISignup) {
  return (
    <SS.Wrapper>
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography component="h1" variant="h4">
          회원가입
        </Typography>
        <Box
          component="form"
          // Onclick Signup
          noValidate
          sx={{ mt: 1 }}
        >
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
          {/* 버튼타입수정하기 */}
          <Button
            type="button"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            onClick={props.onClickSignup}
          >
            가입하기
          </Button>
        </Box>
      </Box>
      <BackButton />
    </SS.Wrapper>
  );
}
