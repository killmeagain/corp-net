import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';
import * as serviceWorker from './serviceWorker';
import './scss/main.scss';
import store from './redux/store'
import { Provider } from 'react-redux'

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();
