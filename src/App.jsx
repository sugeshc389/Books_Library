import TitlePage from "./TitlePage";
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddPage from "./AddPage";
import { useState } from "react";
import { bookContext } from "./Context";
import BookDetail from './BookDetail'
import Mock_Books from "./Mock_book_data";

const App = () => {
  const [book, setBook] = useState(Mock_Books);
  const state = { book, setBook }
  return (
    <div>
      <BrowserRouter>
        <bookContext.Provider value={state}>
          <Routes>
            <Route path="/" Component={TitlePage} />
            <Route path="/addpage" Component={AddPage} />
            <Route path="/bookdetail/:id" Component={BookDetail} />
          </Routes>
        </bookContext.Provider>
      </BrowserRouter>

    </div>
  );
}

export default App;
