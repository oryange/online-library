import React, {useContext} from 'react';
import BookContext from '../context/bookContext';
import BookCard from './bookCard';


function FilteredList() {
  const { filteredBooks } = useContext(BookContext);
 
  return(
    <div className="conteiner-list">
        <h3 className="conteiner-list-h1">Search Results</h3>
      {<BookCard book={filteredBooks}/>}
    </div>       
    );
}

export default FilteredList;