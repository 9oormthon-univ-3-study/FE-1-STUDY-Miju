import styled from "styled-components";

export const Button = styled.button`
  width: 104px;
  height: 60px;

  border: none;
  border-radius: 10px;

  font-size: 18px;
  font-weight: 600;

  background-color: ${(props) => (props.isSelected ? "#92b1d4" : "#f5f5f5")};
  color: ${(props) => (props.isSelected ? "white" : "black")};

  &:hover {
    color: white;
    background-color: #92b1d4;
  }
`;
