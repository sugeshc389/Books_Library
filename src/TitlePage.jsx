import { useNavigate,Link } from 'react-router-dom';
import './TitlePage.css';
import { useContext } from 'react';
import { bookContext } from './Context';

function TitlePage() {
  const navigate = useNavigate();
  const data = useContext(bookContext);



  return (
    <div className='main'>
      <h1>
        Welcome to My Library
        {data.book.map((item,index) => {
          return <h4 key={item.id}><Link to={`/bookdetail/${item.id}`}>Book Title {index+1}.  {item.Title}</Link></h4>;
        })}
      </h1>

      <div>
        <button onClick={() => navigate('/addpage')}>Add</button>
      </div>
    </div>
  );
}

export default TitlePage;
