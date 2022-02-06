import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { store, persistor } from './redux/store';

ReactDOM.render(
  <React.StrictMode>
    {/* <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter> */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
    {/* </BrowserRouter>
      </PersistGate>
    </Provider> */}
  </React.StrictMode>,
  document.getElementById('root'),
);
