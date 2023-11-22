import styled from "styled-components";

export const Form = styled.form`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 480px;
  margin: 0px auto 32px;
  padding: 40px 32px 60px;
  border: 2px solid #fff;
  border-radius: 8px;
  background-color: #9493a5;
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 24px;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  color: #fff;
`;

export const Input = styled.input`
  font-size: 16px;
  height: 36px;
  outline: none;
  padding: 0px 12px;
  border: 1px solid orange;
  border-radius: 8px;
  color: teal;
`;

export const Button = styled.button`
  min-width: 240px;
  margin: 0 auto;
  padding: 16px;

  border: none;
  background-color: #b58310;
  border-radius: 8px;
  font-size: 15px;
  font-weight: 500;
  text-transform: uppercase;
  color: white;
  cursor: pointer;
`;
