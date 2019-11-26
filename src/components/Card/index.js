import styled from 'styled-components';

const Card = styled.li`
  list-style: none;
  color: ${props => props.color || '#000'};
  background: ${props => props.bgColor};
  display: grid;
  grid-template-rows: 30% 50% 20%;
  min-height: 250px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  border-radius: 10px;
  transition: all 0.2s;

  :hover {
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  }

  canvas {
    max-height: 100%;
    max-width: 100%;
  }

  header {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 5px;

    h3 {
      max-width: 300px;
      max-height: 100%;
      text-align: center;
    }
  }

  main {
    color: #000;
    background: rgba(255, 255, 255, 0.3);

    p {
      margin-left: 10px;
      /* font-size: 20px; */

      svg {
        padding-right: 5px;
      }
    }
  }

  footer {
    display: flex;
    border-radius: 0 0 10px 10px;

    a,
    button {
      color: ${props => props.color || '#000'};
      width: 100%;
      height: 100%;
      border: none;
      transition: all 0.2s;
      background: none;
      cursor: pointer;

      :first-child {
        border-bottom-left-radius: 10px;
      }

      & + & {
        border-bottom-right-radius: 10px;
      }
    }

    button:hover {
      background: rgba(0, 0, 0, 0.1);
    }
  }
`;

export default Card;
