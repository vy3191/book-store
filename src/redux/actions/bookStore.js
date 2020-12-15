import * as Services from '../services/bookStore';

export const FETCH_BOOKS = 'FETCH_BOOKS';
export const GET_VOLUME = 'GET_VOLUME';

export const fetchBooks = (keyWord) => ({
   type: FETCH_BOOKS,
   payload : {
     promise: Services.fetchBooks(keyWord)
   }
});

export const getVolume = (id) => ({
  type: GET_VOLUME,
  payload: {
    promise: Services.getVolume(id)
  }
})


