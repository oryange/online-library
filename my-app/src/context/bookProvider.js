import React, { useState } from 'react'
import BookContext from './bookContext';

function BookProvider({children}) {
  const [filteredBooks, setFilteredBooks] = useState([]);
  const [booksByCategories, setBookByCategories] = useState({
    fiction: [],
    action: [],
    juvenile: [],
  });
  const [filterText, setfilterText] = useState('');

  return (
    <BookContext.Provider
      value={{filteredBooks, booksByCategories, filterText, setfilterText}}
    >
      { children }
    </BookContext.Provider>
  );
}

export default BookProvider;
