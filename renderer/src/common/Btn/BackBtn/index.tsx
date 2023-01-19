import { Button } from "@mui/material";
import { useRouter } from "next/router";

export default function BackButton() {
  const router = useRouter();
  const BackLink = () => {
    router.back();
  };
  return <Button onClick={BackLink}>뒤로가기</Button>;
}
