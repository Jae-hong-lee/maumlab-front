import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  margin-bottom: 20px;
`;

export const MessageInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: gray;
  font-weight: 300;
`;

export const ContextWrapper = styled.div`
  width: 75%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-width: max-content;
  color: white;
`;

export const MessageText = styled.p`
  background-color: #4dc885;
  padding: 10px 15px;
  border-radius: 0px 10px 10px 10px;
`;

export const ChatIMG = styled.img`
  background-color: #4dc885;
  border-radius: 0px 10px 10px 10px;
  width: 100%;
  height: 100%;
`;
