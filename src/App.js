import './App.css';
import {useState} from 'react';
import Form from './Components/Form';
import BookList from './Components/BookList';


function App() {

const [bookList, setBookList] = useState({
   books: [{
            name: "Esmiralda",
            author: "Lauren Adams",
            genre: "Drama",
            id: Math.random().toString()
          },
          {
            name: "Space Rangers",
            author: "John Banks",
            genre: "Fiction",
            id: Math.random().toString()
          },
          {
            name: "Omni-Man",
            author: "Richard Lahm",
            genre: "Comic",
            id: Math.random().toString()
          },
        ]

});

const addBook = (newBook) => {
  setBookList({books: [ ...bookList.books , newBook]});
}

const removeBook = (id) => {
  let newList = bookList.books.filter(book => id !== book.id);
  setBookList({books: newList});
}

const editBook = (editedBook, id) => {
  setBookList({books: bookList.books.map(book => book.id === id ? editedBook : book)}) ;
}

  return (
    <div className="App">
      <Form  addBook={addBook}/>   
      <BookList bookList={bookList} removeBook={removeBook} editBook={editBook}/>
    </div>
  );
}

export default App;
