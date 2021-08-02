import React, { useContext } from 'react';
import bookContext from '../context/bookContext';
import BookCard from '../components/bookCard';

// MAP: como object entries retorna chave/valor, desestruturaem formatode array pra pegara chave :)
function BookList() {
  const { booksByCategories } = useContext(bookContext);
  if(booksByCategories)
  return(
    <div>
      {
       Object.entries(booksByCategories).map(([category, books]) => <div>
          <h1>{ category }</h1>
          { Object.values(books).map((book) => <BookCard book={book}/>)}
       </div>)
      }
    </div>
  )
}

export default BookList;
