import styled from 'styled-components';
import { darken } from 'polished';

export const TotemCard = styled.div`
  display: grid;
  grid-template-columns: minmax(10px, 1%) minmax(60px, 30%) minmax(225px, auto);
  grid-template-areas: 'cardcolor cardstatus cardinfo';

  margin-right: 1rem;
  border-radius: 0.25rem;
  max-width: 400px;
  min-height: 250px;

  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  transition: box-shadow 200ms;
  background-color: #fff;

  @media only screen and (min-width: 600px) {
    :hover {
      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
    }
  }
`;

export const TotemColor = styled.section`
  grid-area: cardcolor;
  border-top-left-radius: 0.25rem;
  border-bottom-left-radius: 0.25rem;
  background: ${props => props.color};
`;

export const TotemStatus = styled.section`
  grid-area: cardstatus;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  header {
    display: flex;
    flex-direction: column;
    align-items: center;

    margin-top: 0.5rem;

    > img {
      max-width: 55px;
      max-height: 55px;
    }
  }

  footer {
    overflow-wrap: break-word;
    max-width: 90px;

    p {
      color: #6c757d;
      text-align: center;
    }
  }
`;

export const TotemInfo = styled.section`
  grid-area: cardinfo;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  padding: 0.5rem;

  overflow-wrap: break-word;

  h6 {
    color: #6c757d;
  }

  main {
    margin: 5px 2px 15px 0;
    padding: 0.5rem;
    border: 1px solid #dee2e6;

    svg {
      color: #888;
    }

    select {
      width: calc(100% - 18px);
      margin: 5px 0 5px 2px;
      background: inherit;
      border: none;
      border-bottom: 2px solid #ddd;
      cursor: pointer;
    }

    div:last-child {
      display: flex;
      align-items: center;
      justify-content: space-evenly;
      margin-top: 5px;
      padding: 0 3px;
    }
  }

  footer {
    display: flex;
    justify-content: space-around;
    min-height: 22px;
  }
`;

export const SwitchButton = styled.button`
  background: ${props => (props.isActive ? '#ff9f43' : 'transparent')};
  color: ${props => (props.isActive ? '#fff' : '#ff9f43')};
  border: 1px #dadada solid;
  margin: 0 2px;
  padding: 5px 10px;
  border-radius: 2px;
  font-weight: bold;
  font-size: 9pt;
  outline: none;
  transition: all 150ms ease-in-out;

  :hover {
    color: #fff;
    border: 1px #c6c6c6 solid;
    box-shadow: 1px 1px 1px #eaeaea;
    background: ${darken(0.1, '#ff9f43')};
  }

  :first-child {
    background: ${props => (props.isActive ? '#8395a7' : 'transparent')};
    color: ${props => (props.isActive ? '#fff' : '#8395a7')};
    :hover {
      color: #fff;
      background: ${darken(0.1, '#8395a7')};
    }
  }

  :nth-child(3) {
    background: ${props => (props.isActive ? '#dc3545' : 'transparent')};
    color: ${props => (props.isActive ? '#fff' : '#dc3545')};
    :hover {
      color: #fff;
      background: ${darken(0.1, '#dc3545')};
    }
  }
`;
