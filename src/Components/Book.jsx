import React from 'react';

const Book = ({book}) => {
    return (
        <li key={book.id} className="book">
            <h5>Yoshi's Library</h5>
            <p>Book Name: {book.name}</p>
            <p>Author: {book.author}</p>
            <p>Genre: {book.genre}</p>
            <div>
                <button className="edit">Edit</button>
                <button className="remove">Remove</button>
            </div>
            <hr />
        </li>
    );
}

export default Book;
