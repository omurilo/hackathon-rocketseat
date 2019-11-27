import styled from 'styled-components';

export const StyledForm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 30vw;

  form {
    input,
    button {
      height: 28px;
    }

    button {
      width: 100%;
    }

    p {
      margin-bottom: 6px;
    }
  }
`;
