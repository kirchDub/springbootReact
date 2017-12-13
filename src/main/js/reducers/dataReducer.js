import { SELECT_ALL, INSERT_INTO, DELETE_ROW } from "../actions/types";

export default function(state = {}, action) {
  switch (action.type) {
    case SELECT_ALL:
      return action.payload || false;
    case INSERT_INTO:
      return action.payload || false;
    case DELETE_ROW:
    	return action.payload || false;
    default:
      return state;
  }
}
