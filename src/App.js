import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Modal from 'react-modal';
import ReactTooltip from 'react-tooltip';

import { toast, Slide } from 'react-toastify';
import Routes from './routes';

import GlobalStyle from './styles/global';

import 'react-toastify/dist/ReactToastify.css';

toast.configure({
  autoClose: 2000,
  transition: Slide,
});

Modal.setAppElement('#root');

function App() {
  return (
    <BrowserRouter>
      <Routes />
      <ReactTooltip />
      <GlobalStyle />
    </BrowserRouter>
  );
}

export default App;
