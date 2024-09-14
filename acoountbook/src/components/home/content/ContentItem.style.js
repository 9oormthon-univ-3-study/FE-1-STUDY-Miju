import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 15px 20px;

  border-radius: 8px;

  background-color: rgb(249, 249, 249);
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px;

  cursor: pointer;
`;

export const Date = styled.div`
  margin-bottom: 5px;
  color: rgb(102, 102, 102);
  font-size: 14px;
`;

export const Content = styled.div`
  font-size: 16px;
  font-weight: bold;
  color: #92b1d4;
  flex-shrink: 0;
`;

export const Price = styled.div`
  font-size: 16px;
  font-weight: bold;
  color: #92b1d4;
  flex-shrink: 0;
`;
