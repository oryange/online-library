import { Link } from 'react-router-dom';

function information(props) {
  const {location: {state:
    {thumbnail, title, subtitile, pageCount,publishedDate, description}}} = props;
  return(
    <div>
      <img src={thumbnail} alt={title}/>
      <h2>{title}</h2>
      <p>{subtitile}</p>
      <p>{description}</p>
      <p>Published Date: {publishedDate}</p>
      <p>Page Count: {pageCount}</p>
      <Link to='/home'>Back</Link>
    </div>
  )
}

export default information;
