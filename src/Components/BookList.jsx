import React from 'react';
import Book from './Book';

const BookList = ({bookList , removeBook, editBook}) => {
    return (
        <ul className="book-list">
            {
                bookList.books.map(book => {
                    return(
                        <Book book={book} removeBook={removeBook} editBook={editBook}/>
                    );
                })    
            }
        </ul>
    );
}

export default BookList;
