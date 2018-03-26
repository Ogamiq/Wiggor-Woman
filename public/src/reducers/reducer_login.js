import { LOG_IN, LOG_OUT } from '../actions/index';

export default function(state = {}, action) {
  switch (action.type) {
    case LOG_IN:
      return action.payload.data;
    case LOG_OUT:
      return action.payload;
    default:
      return state;
  }
}