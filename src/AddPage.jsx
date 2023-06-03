import { useContext, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { bookContext } from "./Context";

export default function AddPage() {
    const bookData = useContext(bookContext);
    const { book, setBook } = bookData;
    const navigate = useNavigate();
    const inputRef = useRef(null)

    function bookSubmit(e) {
        console.log(bookData.title);
        e.preventDefault();
    }

    function clickHandler() {
        const Title = inputRef.current.title.value
        const Author = inputRef.current.author.value
        const Category = inputRef.current.category.value
        const Book_no = inputRef.current.bookNo.value
        const id = Math.floor(Math.random() * 1000);
        setBook([...book, { Title, Author, Category, Book_no, id }])
        navigate('/')

    }


    return (
        <div>
            <h1>Add Book Details</h1>
            <form ref={inputRef} onSubmit={bookSubmit}>
                <div className="title"><input id="title" type="text" placeholder="Title" name="title" required /></div><br />
                <div className='author'><input id="author" type="text" placeholder="Author" name="author" required /></div> <br />
                <div className="category"><input id="category" type="text" placeholder="Category" name="category" required /></div><br />
                <div className="book-no"><input id="bookNo" type="text" placeholder="Book No" name="bookNo" required /></div><br />
                <div><button onClick={clickHandler} type="submit">Submit</button></div>
            </form>
        </div>
    )
}