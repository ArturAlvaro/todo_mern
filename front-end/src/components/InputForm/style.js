import styled from 'styled-components';

export const Input = styled.input`
  align-items: center;
  border: none;
  border-radius: 25px;
  box-shadow: 1px 1px 2px white;
  display: flex;
  flex-flow: nowrap column;
  height: 7vh;
  text-align: center;
  width: 60vw;
  &:hover {
    border: 0px solid white;
    box-shadow: 1px 1px 2px grey;
    outline-width: 0;
    transition-duration: 0.2s;
  }
`;

export const Label = styled.label`
  align-items: center;
  display: flex;
  flex-flow: nowrap column;
`;

export const Section = styled.section`
  align-items: center;
  display: flex;
  flex-flow: nowrap column;
`;

export const Button = styled.button`
  background-color: #e7e7e7;
  border: none;
  border-radius: 15px;
  box-shadow: 1px 1px 4px 0px white;
  color: black;
  height: 5vh;
  margin: 5px;
  width: 20vw;
  &:hover {
    background-color: #4CAF50;
    box-shadow: 1px 1px 4px 0px grey;
    color: white;
    font-weight: 600;
    transition-duration: 0.4s;
  }
`;
