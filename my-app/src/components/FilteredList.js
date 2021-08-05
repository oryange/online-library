import BookCard from "./bookCard";
function FilteredList({filteredBooks}) {
  return(
    <div className="filtered-list">
      <h3>Search</h3>
      <div className="conteiner-list">
        {
        filteredBooks.map((book) => <BookCard book={book}/>)
        }
      </div>
    </div>
  );
}

export default FilteredList;