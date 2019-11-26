import styled from 'styled-components';

export const StyledLink = styled.span`
  line-height: 2px;
  svg {
    color: ${props => (props.highlight ? 'rgba(255,255,255,1)' : '')};
  }
`;
