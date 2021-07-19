import React from 'react';
import Book from './Book';

const BookList = ({bookList}) => {
    return (
        <ul className="book-list">
            {
                bookList.books.map(book => {
                    return(
                        <Book book={book}/>
                    );
                })    
            }
        </ul>
    );
}

export default BookList;
