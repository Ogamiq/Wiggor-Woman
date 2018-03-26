import { REGISTER } from '../actions/index';

export default function(state = '', action) {
  switch (action.type) {
    case REGISTER:
      return action.payload.data.email ? 'success' : 'failure';
    default:
      return state;
  }
}