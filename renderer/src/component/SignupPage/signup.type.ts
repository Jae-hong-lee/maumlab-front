export interface ISignup {
  onClickSignup: (data: FormValues) => void;
}

export type FormValues = {
  email: string;
  password: string;
};
