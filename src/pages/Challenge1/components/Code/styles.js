import styled from 'styled-components';

export const CodeBox = styled.ul`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  li {
    text-align: end;
    border-radius: 5px;
    margin: 5px;
    padding: 5px;
    background-color: #fff;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  }
`;
