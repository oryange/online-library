import React, { useContext } from 'react';
import bookContext from '../context/bookContext';

function BookList() {
  const { booksByCategories } = useContext(bookContext);
  return(
    <div>
      {
       Object.keys(booksByCategories).map((category) => <div>
          <h1>{category}</h1>
       </div>)
      }
    </div>
  )
}

export default BookList;
