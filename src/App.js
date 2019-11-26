import React from 'react';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import Modal from 'react-modal';
import ReactTooltip from 'react-tooltip';

import { toast, Slide } from 'react-toastify';
import Routes from './routes';

import './config/ReactotronConfig';

import { store, persistor } from './store';
import GlobalStyle from './styles/global';

import 'react-toastify/dist/ReactToastify.css';

toast.configure({
  // position: toast.POSITION.TOP_CENTER,
  autoClose: 2000,
  // hideProgressBar: true,
  transition: Slide,
});

Modal.setAppElement('#root');

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <BrowserRouter>
          <Routes />
          <ReactTooltip />
          <GlobalStyle />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
}

export default App;
