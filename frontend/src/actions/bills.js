import axios from 'axios';

// Action Type Imports 
import { GET_BILLS, DELETE_BILL } from './types';


// GET JOBS ACTIONS
export const getBills = () => dispatch => {
  axios.get('http://localhost:5000/api/bills/')
    .then(res => {
      dispatch({
        type: GET_BILLS,
        payload: res.data
      })
    }).catch(err => console.log(err.response));
};

export const deleteBill = (id) => dispatch => {
  axios.delete(`http://localhost:5000/api/bills/${id}`)
    .then(res => {
      dispatch({
        type: DELETE_BILL,
        payload: id
      })
    }).catch(err => console.log(err.response));
}