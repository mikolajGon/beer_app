import { combineReducers } from 'redux';
import BeersReducer from './reducer_beers';
import InfiniteScrollReducer from './reducer_infiniteScroll';
import BeerErrorReducer from './reducer_beerError';

const rootReducer = combineReducers({
  beers: BeersReducer,
  infiniteScroll: InfiniteScrollReducer,
  beerError: BeerErrorReducer
});

export default rootReducer;
