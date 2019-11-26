import styled, { css } from 'styled-components';

export const StyledPage = styled.div`
  height: 100%;
  margin: 1rem;

  > h6 {
    color: #aaa;
    padding: 5px;
    border-bottom: 1px solid #ddd;
    ${props =>
      props.hasSub
        ? css`
            border-left: 1px solid #ddd;
            border-radius: 0 0 0 8px;
          `
        : ''}
  }

  a:hover {
    text-decoration: none;
  }
`;

export default StyledPage;
