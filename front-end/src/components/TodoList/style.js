import styled from 'styled-components';

export const Li = styled.li`
  align-items: center;
  background-color: #ECF8F8;
  border: 1px solid grey;
  border-radius: 25px;
  display: flex;
  flex-flow: nowrap row;
  justify-content: space-evenly;
  margin: 2px;
  outline-width: 0;
  width: 90vw;
  &:hover {
    border: 1px solid #0B2027;
    box-shadow: 1px 1px 5px 0px grey;
    outline-width: 0;
    transition-duration: 0.1s;
  }
`;

export const Ul = styled.ul`
  display: flex;
  flex-flow: nowrap column;
`;

export const Div = styled.div`
  align-items: center;
  border: 1px solid #0B2027;
  border-radius: 50px;
  box-shadow: 1px 1px 5px 0px grey;
  display: flex;
  flex-flow: nowrap row;
  padding: 10px;
  &:hover {
    border: 2px solid #0B2027;
    outline-width: 0;
    transition-duration: 0.1s;
  }
`;

export const Button = styled.button`
  border: none;
  background: none;
`;

export const P = styled.p`
  color: #4F3857;
  font-weight: 400;
`;
