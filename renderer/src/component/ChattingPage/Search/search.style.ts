import styled from "@emotion/styled";

export const Wrapper = styled.div``;

export const SearchBox = styled.div`
  padding: 10px;
`;

export const SearchInput = styled.input`
  background-color: transparent;
  border: none;
  outline: none;
  font-size: 25px;
  &::placeholder {
    color: lightgray;
  }
`;

export const SearchErr = styled.p`
  font-weight: 600;
  padding: 10px;
`;

export const SearchUserInfo = styled.div`
  padding: 10px;
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;

  &:hover {
    background-color: #044727;
  }
`;

export const UserChatInfo = styled.div``;
