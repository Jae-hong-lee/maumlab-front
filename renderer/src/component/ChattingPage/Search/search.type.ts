export interface ISearch {
  chatUser: any;
  chipData: any;
  handleDelete: (chipToDelete: ChipData) => void;
  onClickUser: (el: string) => void;
  onClickSelect: (e: any) => void;
}

export interface ChipData {
  data: string;
}
