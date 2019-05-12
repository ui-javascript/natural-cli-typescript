import * as React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';

import { Provider } from 'react-redux'
import reducers from './reducers';
import App from './App'
import './styles/animate.css';
import './styles/index.css';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(reducers);
const element = document.getElementById('root');
if (!element) {
  throw new Error("couldn't find element with id root")
}
// TS内置提供了浏览器全局变量申明，比如HTMLElement
render(
  <Provider store={store}>
    <App />
  </Provider>,
  element as HTMLElement
);
registerServiceWorker();
