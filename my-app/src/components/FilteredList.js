import React, { useContext } from 'react';
import BookCard from "./bookCard";
import BookContext from '../context/bookContext';

function FilteredList() {
  const { filteredBooks } = useContext(BookContext);
  return(
    <div className="conteiner-list">
        <h3>TESTE DE RENDERI</h3>
      {
       Object.entries(filteredBooks).map(([category, books]) => <div>
          <h1>{ category }</h1>
          <div >
          { books.map((book) => <BookCard book={book}/>)
          }
          </div>
       </div>)
      }
    </div>
  );
}

export default FilteredList;