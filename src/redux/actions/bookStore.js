import * as Services from '../services/bookStore';

export const FETCH_BOOKS = 'FETCH_BOOKS';

export const fetchBooks = (keyWord) => ({
   type: FETCH_BOOKS,
   payload : {
     promise: Services.fetchBooks(keyWord)
   }
})
