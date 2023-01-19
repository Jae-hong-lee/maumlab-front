import styled from "@emotion/styled";

export const Wrapper = styled.div`
  border-bottom: 1px solid gray;
`;

export const SearchBox = styled.div`
  padding: 10px;
`;

export const SearchInput = styled.input`
  background-color: transparent;
  border: none;
  color: white;
  outline: none;
  &::placeholder {
    color: lightgray;
  }
`;

export const SearchErr = styled.p`
  color: white;
  font-weight: 600;
  padding: 10px;
`;

export const SearchUserInfo = styled.div`
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

export const UserChatInfo = styled.div``;
