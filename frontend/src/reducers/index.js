import { combineReducers } from 'redux';

// Reducers Imports
import bills from './bills';

export default combineReducers({
  bills: bills
})