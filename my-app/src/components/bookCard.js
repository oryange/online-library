import React from 'react';
import {Link} from 'react-router-dom';

function BookCard(props) {
  const { book: { items } } = props;

  return(
    <div className="book-cards">
    { items.map(({volumeInfo: {title, subtitile, pageCount, publishedDate,description, imageLinks : {thumbnail ='https://faturealto.com/wp-content/uploads/2018/10/Capa-3D-Ebook-2-300x300.png'} = {}}}) => (
      <div className="book-card">
        <img src={thumbnail} alt={title}/>
        <Link className="book-card-text" to={{
            pathname:"/information",
            state:{
              thumbnail,
              title,
              subtitile,
              pageCount,
              publishedDate,
              description
            }}
          }
          >
        <span>{title}</span>
        </Link>
      </div>
  ))}
    </div>
  )
}

export default BookCard;

