import { GET_BILLS, DELETE_BILL } from '../actions/types';

const initialState = {
  bills: []
}

export default function(state = initialState, action) {
  switch(action.type) {
    case GET_BILLS:
      return {
        ...state,
        bills: action.payload
      };
    
    case DELETE_BILL:
      return {
        ...state,
        bills: state.bills.filter(bill => bill._id !== action.payload)
      };

    default:
      return state;
  }
}