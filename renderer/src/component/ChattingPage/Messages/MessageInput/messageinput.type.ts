import { ChangeEvent } from "react";

export interface IInput {
  text: string;
  img: string | null;
  onChangeText: (e: ChangeEvent<HTMLInputElement>) => void;
  onChangeIMG: (e: ChangeEvent<HTMLInputElement>) => void;
  SendMessage: (e: any) => void;
}
