import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';
import RootStore from './stores/RootStore';
import client from './client';
import App from './components/App';
import globalStyle from './themes/globalStyle';

globalStyle;

const rootStore = new RootStore(client);

ReactDOM.render(
  <Provider rootStore={rootStore}>
    <App />
  </Provider>,
  document.getElementById('mount-point'));

if (module.hot) {
  module.hot.accept();
}