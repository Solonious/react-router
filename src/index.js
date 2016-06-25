import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import { routes } from './routes';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';


const store = configureStore();
const root =   document.getElementById('root');

render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes}/>
  </Provider>, root
)