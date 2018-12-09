import { combineReducers } from 'redux';
import BeersReducer from './reducer_beers';
import InfiniteScrollReducer from './reducer_infiniteScroll';

const rootReducer = combineReducers({
  beers: BeersReducer,
  infiniteScroll: InfiniteScrollReducer
});

export default rootReducer;
