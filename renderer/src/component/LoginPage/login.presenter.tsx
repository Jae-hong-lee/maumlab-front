import { Avatar, Box, Button, TextField, Typography } from "@mui/material";
import BackButton from "../../common/Btn/BackBtn";
import * as LS from "./login.style";
import { ILogin } from "./login.type";
import { ErrorText } from "../../common/styles/ErrorMessage";
import Link from "next/link";

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
        <Typography component="h4" variant="h4">
          로그인
        </Typography>

        <Box
          component="form"
          noValidate
          sx={{ mt: 2, width: "80%" }}
          onSubmit={props.onClickLogin}
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

          {/* 로그인 버튼 타입수정하기 */}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            로그인하기
          </Button>
        </Box>

        {/* a 태그 사용이유: 
        "https://nextjs.org/docs/pages/api-reference/components/link#if-the-child-is-a-custom-component-that-wraps-an-a-tag" */}
        <Link href={"/signup"} passHref>
          <LS.SignUpLink>회원가입하러가기</LS.SignUpLink>
        </Link>
      </Box>
    </LS.Wrapper>
  );
}
