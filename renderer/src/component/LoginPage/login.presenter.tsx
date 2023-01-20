import { Avatar, Box, Button, TextField, Typography } from "@mui/material";
import BackButton from "../../common/Btn/BackBtn";
import * as LS from "./login.style";
import { ILogin } from "./login.type";
// yup & react-hook-form
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormValues } from "../SignupPage/signup.type";

// Validation
const schma = yup.object({
  email: yup
    .string()
    .email("이메일 형식이 적합하지 않습니다!")
    .required("이메일은 필수입력 사항입니다."),

  password: yup
    .string()
    .required("비밀번호는 필수 입력사항입니다.")
    .min(6, "비밀번호는 최소 6자리 이상으로 입력해주세요")
    .max(10, "비밀번호는 최대 10자리 이내로 입력해주세요")
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{0,10}$/,
      "비밀번호는 영문,숫자,특수문자를 포함해야 합니다."
    ),
});

export default function LoginUI(props: ILogin) {
  const { register, handleSubmit, formState } = useForm<FormValues>({
    resolver: yupResolver(schma),
    mode: "onChange",
  });

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

        <Box
          component="form"
          noValidate
          sx={{ mt: 1, width: "80%" }}
          onSubmit={handleSubmit(props.onClickLogin)}
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
            error={formState.errors.email?.message ? true : false}
            helperText={formState.errors.email?.message}
            {...register("email")}
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
            error={formState.errors.password?.message ? true : false}
            helperText={formState.errors.password?.message}
            {...register("password")}
          />
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
        <Button onClick={props.SignupClick}>회원가입 하러가기</Button>
        <BackButton />
      </Box>
    </LS.Wrapper>
  );
}
