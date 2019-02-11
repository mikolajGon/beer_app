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
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <React.Fragment>
        <h1 className='main-title'>What's your poison?</h1>
        <Switch>
          <Route path='/:id' component={ BeerList } />
          <Route exact path='/' component={ BeerList } />
        </Switch>
      </React.Fragment>
    </BrowserRouter>
  </Provider>
  , document.querySelector('#root'));
