import styled from "@emotion/styled";

export const Wrapper = styled.div``;

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
