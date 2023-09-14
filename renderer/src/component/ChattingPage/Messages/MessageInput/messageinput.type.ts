import { ChangeEvent } from "react";

export interface IInput {
  text: string;

  onChangeText: (e: ChangeEvent<HTMLInputElement>) => void;

  SendMessage: (e: any) => void;
}
