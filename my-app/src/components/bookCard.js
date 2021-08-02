import React from 'react';

function BookCard(props) {
  const { book } = props;
  const object = Object.values(book).map(({volumeInfo})=> volumeInfo);

  return(
    <div>
      {
        Object.entries(object).map(({title})=> <h1>{title}</h1>)
      }
    </div>
  )
}

export default BookCard;
