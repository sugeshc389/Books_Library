import { useContext } from "react";
import { useNavigate, useParams, } from "react-router-dom";
import { bookContext } from "./Context";

export default function BookDetail() {
    const { id } = useParams();
    const data = useContext(bookContext);
    const { book } = data;
    const navigate = useNavigate();
    const filterId = book.filter((item) => item.id === parseInt(id));

    return (
        <>
            <div>
                {filterId.map((item) => (
                    <div key={item.id}>

                        <h1>Book Name : {item.Title}</h1>
                        <h2>Book Author : {item.Author}</h2>
                        <h4>Book Category : {item.Category}</h4>
                        <h4>Book No : {item.Book_no}</h4>
                        <button>Take Book</button>

                    </div>

                ))}

                <div style={{ padding: '2rem' }}>
                    <button onClick={() => navigate('/')}>Back</button>
                </div>
            </div>



        </>
    )
}