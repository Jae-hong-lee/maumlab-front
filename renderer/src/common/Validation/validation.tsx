import * as yup from "yup";

export const loginSchema = yup.object().shape({
  email: yup
    .string()
    .email("이메일 형식이 적합하지 않습니다!")
    .required("이메일은 필수입력 사항입니다."),
  password: yup
    .string()
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,16}$/,
      "영문, 숫자 조합 8~16 자리의 비밀번호를 입력해 주세요."
    )
    .required("비밀번호는 필수 입력사항입니다."),
});

export const SignUpSchema = yup.object().shape({
  nickName: yup
    .string()
    .max(10, "닉네임은 10글자 이하입니다.")
    .required("닉네임은 필수입력 사항입니다."),
  email: yup
    .string()
    .email("이메일 형식이 적합하지 않습니다!")
    .required("이메일은 필수입력 사항입니다."),
  password: yup
    .string()
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,16}$/,
      "영문, 숫자 조합 8~16 자리의 비밀번호를 입력해 주세요."
    )
    .required("비밀번호는 필수 입력사항입니다."),
  passwordCheck: yup
    .string()
    .oneOf([yup.ref("password"), null], "비밀번호를 다시 확인해주세요.")
    .required("비밀번호 확인은 필수 입력사항입니다."),
});
