import { FETCH_BEERS } from '../actions';

export default function (state = true, action) {
  switch (action.type) {
    case FETCH_BEERS:
      return action.payload.data.length < 24 ? false : true;
    default:
      return state;
  }
}
