import styled from 'styled-components';
import { darken } from 'polished';

export const Button = styled.button`
  margin-left: 10px;
  align-self: flex-end;
  padding: 5px 10px;
  background: #fe9a01;
  color: #fff;
  border: 0;
  border-radius: 4px;
  font-size: 16px;
  height: 44px;
  text-align: center;
  font-weight: bold;
  transition: background 0.2s;

  &:hover {
    background: ${darken(0.03, '#fe9a01')};
  }
`;

export const Code = styled.div`
  border: 1px solid #43cfec;
  border-radius: 4px;
  width: 500px;
  line-height: 1.8;
  margin-right: 10px;
  font-size: 20px;

  code {
    text-align: left;
  }
`;

export const FlexContainer = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 18px;
  justify-content: center;
`;
