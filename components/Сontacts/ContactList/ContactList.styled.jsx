import styled from "styled-components";

export const ContactListStyled = styled.ul`
  display: flex;
  flex-direction: column;
  margin: 0 auto 15px;
  width: 480px;
`;

export const ContactItem = styled.li`
  display: flex;
  align-items: center;
  font-size: 20px;
  font-weight: 500;

  &:not(:last-child) {
    margin-bottom: 20px;
  }
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  margin-left: auto;
  padding: 4px;
  border: none;
  border-radius: 50%;

  font-size: 20px;
  background-color: #f3ae10;
  color: white;
  cursor: pointer;
`;

export const NameText = styled.p`
  min-width: 40%;
  color: #f3ae10;
`;

export const NumberText = styled.p`
  margin-left: 20px;
  color: #fff;
`;
