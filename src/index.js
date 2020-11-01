import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, compose, applyMiddleware } from 'redux';

import App from './app/App';
import rootReducer from './store/rootReducer';
import thunk from 'redux-thunk';

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk)
  )
)

ReactDOM.render(  
  <React.StrictMode>
    <Provider store = {store}>
      <BrowserRouter>
        <App/>
      </BrowserRouter>  
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);