import React, { useEffect, useState } from 'react'
import BookContext from './bookContext';
import mockActions from '../data/mockActions';
import mockFictions from '../data/mockFictions';
import mockJuvenile from '../data/mockJuvenile';
import fetchBooks from '../services/bookServices';

function BookProvider({children}) {

  const [filteredBooks, setFilteredBooks] = useState([]);
  const [booksByCategories, setBookByCategories] = useState({
    fiction: [],
    action: [],
    juvenile: [],
  })
   
  async function filterBooks(query) {
    const books = await fetchBooks(query);
    setFilteredBooks(books);
  }

  useEffect(()=> {
    setBookByCategories({
      fiction: mockFictions,
      action: mockActions,
      juvenile: mockJuvenile,
    })
  }, [])

  return (
    <BookContext.Provider
      value={{filteredBooks, booksByCategories, filterBooks}}
    >
      { children }
    </BookContext.Provider>
  );
}

export default BookProvider;
