import { Avatar, Box, Button, TextField, Typography } from "@mui/material";
import BackButton from "../../common/Btn/BackBtn";
import * as SUS from "./signup.style";
import { ISignup } from "./signup.type";
import { ErrorText } from "../../common/styles/ErrorMessage";

export default function SignUpUI(props: ISignup) {
  return (
    <SUS.Wrapper>
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1 }} />
        <Typography component="h4" variant="h4">
          회원가입
        </Typography>

        <Box
          component="form"
          noValidate
          sx={{ mt: 1, width: "80%" }}
          onSubmit={props.onClickSignup}
        >
          <TextField
            margin="normal"
            required
            fullWidth
            id="nickName"
            label="닉네임"
            name="nickName"
            autoFocus
            error={props.formState.errors.nickName?.message ? true : false}
            {...props.register("nickName")}
          />
          <ErrorText>
            {props.formState.errors.nickName?.message || <br />}
          </ErrorText>

          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="이메일"
            name="email"
            autoComplete="email"
            error={props.formState.errors.email?.message ? true : false}
            {...props.register("email")}
          />
          <ErrorText>
            {props.formState.errors.email?.message || <br />}
          </ErrorText>

          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="비밀번호"
            type="password"
            id="password"
            autoComplete="current-password"
            error={props.formState.errors.password?.message ? true : false}
            {...props.register("password")}
          />
          <ErrorText>
            {props.formState.errors.password?.message || <br />}
          </ErrorText>

          <TextField
            margin="normal"
            required
            fullWidth
            name="passwordCheck"
            label="비밀번호 확인"
            type="password"
            id="passwordCheck"
            error={props.formState.errors.passwordCheck?.message ? true : false}
            {...props.register("passwordCheck")}
          />
          <ErrorText>
            {props.formState.errors.passwordCheck?.message || <br />}
          </ErrorText>

          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            가입하기
          </Button>
        </Box>
        {/* 뒤로가기 버튼 */}
        <BackButton />
      </Box>
    </SUS.Wrapper>
  );
}
