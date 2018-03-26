import { USER_EVENTS } from '../actions/index';

export default function(state = [], action) {
  switch(action.type) {
    case USER_EVENTS:
      return [ action.payload ];
  }
  return state;
}