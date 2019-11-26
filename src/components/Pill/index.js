import styled, { css } from 'styled-components';

const Pill = styled.button`
  display: inline-block;
  color: ${props => props.color};
  background-color: rgba(0, 0, 0, 0);
  border-color: ${props => props.color};
  font-weight: bold;

  cursor: pointer;
  border-radius: 800px;
  border-style: solid;
  border-width: 1px;

  margin: 0px 4px 4px 4px;
  padding: 4px 8px;

  text-align: center;
  line-height: 21px;

  transition: all 0.15s ease-in-out;

  :hover {
    text-decoration: none;
    color: #fff;
    background-color: ${props => props.color};
    border-color: ${props => props.color};
  }

  ${props =>
    props.isActive
      ? css`
          color: #fff;
          background-color: ${p => p.color};
          border-color: ${p => p.color};
        `
      : ''}
`;

export default Pill;
