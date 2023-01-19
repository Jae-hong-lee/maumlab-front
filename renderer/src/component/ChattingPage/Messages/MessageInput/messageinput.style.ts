import styled from "@emotion/styled";

export const Wrapper = styled.div`
  height: 50px;
  padding: 5px;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const MessageInput = styled.input`
  width: 100%;
  border: none;
  outline: none;
  color: #2f2d52;
  font-size: 18px;
  background-color: white;
  &::placeholder {
    color: lightgray;
  }
`;

export const MessageWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const DataImg = styled.img`
  height: 40px;
`;
