import axios from 'axios';

// PAGINATION
const perPage = 24;

const ROOT_URL = 'https://api.punkapi.com/v2/beers';

export const FETCH_BEERS = 'fetch_beers';
export const FETCH_BEER = 'fetch_beer';
export const NO_BEER = 'no_beer';

export function fetchBeers(page = 1) {
  const pagination = `page=${page}&per_page=${perPage}`;
  const req = axios.get(`${ROOT_URL}?${pagination}`);

  return {
    type: FETCH_BEERS,
    payload: req
  }
}

export function fetchBeer(id) {
  return axios.get(`${ROOT_URL}/${id}`)
    .then(
      res => ({ type: FETCH_BEER, payload: res }),
      err => ({ type: NO_BEER, payload: err })
    )
}