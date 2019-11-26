import styled from 'styled-components';

const justifyContent = side =>
  side === 'right'
    ? `
    justify-content: flex-end;
`
    : `
    justify-content: flex-start;
`;

export const MainMenu = styled.div`
  max-width: 100%;
  min-height: 50px;
  display: flex;
  ${({ side }) => justifyContent(side)}
  align-items: center;

  & > *:first-child:not() {
    margin: 0 5px;
  }
`;

export default MainMenu;
