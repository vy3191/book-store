import { FETCH_BOOKS } from '../actions';

const initialState = {
   fetching:false,
   data: [],
   error: null
}

import { listBooks } from './model/model';

export const bookStoreReducer = (state=initialState, action) => {
  // action.type === `${FETCH_BOOKS}_FULLFILLED` && (
  //   state =  {
  //     ...state,
  //     fetching: false,
  //     error: null,
  //     data: action.payload
  //   }
  // )
  console.log('action>>>>>>>>>>>', action)
  switch(action.type) {
    case `${FETCH_BOOKS}_PENDING`:
      return {
        ...state,
        fetching: true,
        error: null,
        data: []
      }
    case `${FETCH_BOOKS}_FULFILLED`:
      return {
        ...state,
        fetching: false,
        error: null,
        data: listBooks(action.payload)
      }
    case `${FETCH_BOOKS}_REJECTED`:
      return {
        ...state,
        fetching: false,
        error: true,
        data: []
      } 
    default:
      return state
           
  }
}
