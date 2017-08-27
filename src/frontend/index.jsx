import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';
import RootStore from './stores/RootStore';
import App from './components/App';
import globalStyle from './themes/globalStyle';

globalStyle;

const rootStore = new RootStore();

ReactDOM.render(
  <Provider rootStore={rootStore}>
    <App />
  </Provider>,
  document.getElementById('mount-point'));

if (module.hot) {
  module.hot.accept();
}