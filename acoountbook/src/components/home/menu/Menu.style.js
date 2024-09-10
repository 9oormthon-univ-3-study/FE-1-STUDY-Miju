import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  gap: 10px;

  padding: 20px;

  background-color: white;
  border-radius: 16px;
`;

export const Button = styled.button`
  height: 34px;

  padding: 8px 20px;
  margin-top: 19px;

  border: none;
  border-radius: 4px;

  background-color: #92b1d4;
  color: white;
  font-size: 14px;

  cursor: pointer;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: #6888ad;
  }
`;
