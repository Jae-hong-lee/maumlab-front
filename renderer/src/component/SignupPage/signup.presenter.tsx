import { Box, Button, TextField, Typography } from "@mui/material";
import BackButton from "../../common/Btn/BackBtn";
import * as SUS from "./signup.style";
import { FormValues, ISignup } from "./signup.type";
// yup & react-hook-form
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

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

export default function SignUpUI(props: ISignup) {
  const { register, handleSubmit, formState } = useForm<FormValues>({
    resolver: yupResolver(schma),
    mode: "onChange",
  });

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
        <Typography component="h1" variant="h4">
          회원가입
        </Typography>
        <Box
          component="form"
          noValidate
          sx={{ mt: 1, width: "80%" }}
          onSubmit={handleSubmit(props.onClickSignup)}
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
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            가입하기
          </Button>
        </Box>
        <BackButton />
      </Box>
    </SUS.Wrapper>
  );
}
