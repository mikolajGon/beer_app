import { NO_BEER } from '../actions';

export default function (state, { type, payload }) {
  switch (type) {
    case NO_BEER:
      const { message, error, statusCode } = payload.response.data;
      return { message, error, statusCode }
    default:
      return {};
  }
}
