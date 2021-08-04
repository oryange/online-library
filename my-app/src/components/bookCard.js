import React from 'react';

function BookCard({ book: { items } }) {
  return(
    <div className="book-card">
    { items.map(({volumeInfo: {title, publisher, imageLinks : {thumbnail ='https://faturealto.com/wp-content/uploads/2018/10/Capa-3D-Ebook-2-300x300.png'} = {}}}) => (
      <div>
        <img src={thumbnail} alt={title}/>
        <span>{title}</span>
        <p>{publisher}</p>
      </div>
  ))}
    </div>
  )
}

export default BookCard;

