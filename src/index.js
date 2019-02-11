import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import promise from 'redux-promise';

import BeerList from './components/beer_list';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <React.Fragment>
        <h1 className='main-title'>What's your poison?</h1>
        <Switch>
          <Route path='beer_app/:id' component={ BeerList } />
          <Route path='beer_app/' component={ BeerList } />
        </Switch>
      </React.Fragment>
    </BrowserRouter>
  </Provider>
  , document.querySelector('#root'));
