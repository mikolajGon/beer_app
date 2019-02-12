import { FETCH_BEERS, FETCH_BEER } from '../actions';
import _ from 'lodash';

export default function (state = {}, action) {
  switch (action.type) {
    case FETCH_BEER:
      console.log(action.payload);
      return { ...state, [action.payload.data[0].id]: action.payload.data[0] } // in case someone enters directly to id
    case FETCH_BEERS:
     return { ...state, ..._.mapKeys(action.payload.data, 'id') };
    default:
     return state;
  }
}
