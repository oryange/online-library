import React from 'react';
import {Link} from 'react-router-dom';

function BookCard(props) {
  const { book: { items } } = props;

  return(
    <div className="book-card">
    { items.map(({volumeInfo: {title, subtitile, pageCount, publishedDate,description, imageLinks : {thumbnail ='https://faturealto.com/wp-content/uploads/2018/10/Capa-3D-Ebook-2-300x300.png'} = {}}}) => (
      <div>
        <img src={thumbnail} alt={title}/>
        <Link to={{
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

