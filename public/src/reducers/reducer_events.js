import { EVENTS } from '../actions/index';

export default function(state = [], action) {
  switch(action.type) {
    case EVENTS:
      return [ action.payload ];
  }
  return state;
}