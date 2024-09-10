import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 1 0%;
  gap: 5px;

  min-width: 120px;
`;

export const Title = styled.label`
  font-size: 14px;
  color: rgb(51, 51, 51);
`;

export const Input = styled.input`
  padding: 8px;
  border: 1px solid rgb(221, 221, 221);
  border-radius: 4px;
  font-size: 14px;
`;
