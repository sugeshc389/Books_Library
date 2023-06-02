import { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom"
import { bookContext } from "./Context";


export default function BookDetail() {
    const { id } = useParams();
    const data = useContext(bookContext);
    const { book } = data
    const navigate = useNavigate();
    const filterId = book.filter((item) => item.id === parseInt(id));
    

    return (
        <>
            <div>
                {filterId.map((item) => (
                    <div key={item.id}>

                        <h1>Book Name : {item.Title}</h1>
                        <h4>Book Author : {item.Author}</h4>
                        <h4>Book Category : {item.Category}</h4>
                        <h4>Book No : {item.Book_no}</h4>
                        
                    </div>
                   
                ))}
                <button onClick={()=>navigate('/')}>Back</button>
            </div>

        </>
    )
}