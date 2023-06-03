import { useNavigate, Link } from 'react-router-dom';
import './TitlePage.css';
import { useContext } from 'react';
import { bookContext } from './Context';


function TitlePage() {
    const navigate = useNavigate();
    const data = useContext(bookContext);
    const { book } = data
    console.warn(book);
    // const [newbook] =book    //book =  [[{},{},{}]]    newbook = [{},{},{}]

    return (
        <div className='main'>
            <h1>

                Welcome to My Library
            </h1>
            {book.map((item, index) => {
                return (
                    <div key={item.id}>
                        <ul>
                            <li><h2 ><Link to={`/bookdetail/${item.id}`}>{index + 1}.  Book Title : {item.Title}</Link></h2></li>
                        </ul>
                    </div>
                )
            })}



            <div>
                <button onClick={() => navigate('/addpage')}>Add</button>
            </div>
        </div>


    );
}

export default TitlePage;
