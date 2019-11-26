import styled from 'styled-components';

const FilterBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  max-width: 100%;
  margin-bottom: 10px;

  > div,
  > input {
    margin: 5px;
    min-width: 150px;
    max-width: 220px;
  }
`;

export default FilterBox;
