import { FETCH_BOOKS, GET_VOLUME } from '../actions';

const initialState = {
   fetching:false,
   data: [],
   volume: {},
   error: null
}

import { listBooks } from './model/model';

export const bookStoreReducer = (state=initialState, action) => { 
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
      case `${GET_VOLUME}_PENDING`:
        return {
          ...state,
          fetching: true,
          error: null,
          data: []
        }
      case `${GET_VOLUME}_FULFILLED`:
        return {
          ...state,
          fetching: false,
          error: null,
          volume: action.payload
        }
      case `${GET_VOLUME}_REJECTED`:
        return {
          ...state,
          fetching: false,
          error: true,
          volume: {}
        }  

    default:
      return state
           
  }
}
