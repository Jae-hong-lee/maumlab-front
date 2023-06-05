import styled from "@emotion/styled";

// Modal Style
export const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export const Wrapper = styled.div``;

export const HadderText = styled.div`
  font-weight: 600;
  font-size: 20px;
  padding-left: 5px;
  margin: 10px;
`;

export const HadderBox = styled.div`
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
`;

export const UserChatInfo = styled.div`
  padding: 10px;
  display: flex;
  align-items: center;
  gap: 10px;
  color: white;
  cursor: pointer;

  &:hover {
    background-color: #044727;
  }
`;

export const UserName = styled.span`
  font-size: 18px;
  font-weight: 500;
`;

export const LatestMessage = styled.p`
  font-size: 14px;
  color: lightgray;
  margin: 0px;
`;
