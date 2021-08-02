import React, { useEffect, useState } from 'react'
import BookContext from './bookContext';
import mockActions from '../data/mockActions';
import mockFictions from '../data/mockFictions';
import mockJuvenile from '../data/mockJuvenile';

function BookProvider({children}) {

  const [filteredBooks, setFilteredBooks] = useState([]);
  const [booksByCategories, setBookByCategories] = useState({
    fiction: [],
    action: [],
    juvenile: [],
  })
  const [filterText, setfilterText] = useState('');
  
  useEffect(()=> {
    setBookByCategories({
      fiction: mockFictions,
      action: mockActions,
      juvenile: mockJuvenile,
    })
  }, [])

  return (
    <BookContext.Provider
      value={{filteredBooks, booksByCategories, filterText, setfilterText}}
    >
      { children }
    </BookContext.Provider>
  );
}

export default BookProvider;
