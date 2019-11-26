import styled from 'styled-components';
// 350px mt-4
export const Grid = styled.ul`
  display: grid;
  grid-template-columns: repeat(
    auto-fill,
    minmax(${props => props.cardWidth}, 1fr)
  );
  grid-gap: 15px;
  margin-top: 1rem;
`;

export default Grid;
