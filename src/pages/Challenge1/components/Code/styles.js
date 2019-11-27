import styled from 'styled-components';

export const CodeBox = styled.ul`
  height: 100%;
  display: flex;
  flex-direction: column-reverse;
  overflow-y: auto;
`;

export const BoxItem = styled.li`
  text-align: start;
  border-radius: 5px;
  margin: 5px;
  padding: 15px;
  background-color: ${props =>
    props.origin === 'user' ? '#82cf02' : '#f30092'};
  color: #fff;
  box-shadow: 0 0 0 rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  cursor: pointer;
`;
