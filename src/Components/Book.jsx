import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import EditForm from './EditForm';

const Book = ({book, removeBook, editBook}) => {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    

    const handleRemove = (e) => {
        e.preventDefault();
        removeBook(book.id);
    }

    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <EditForm book={book} editBook={editBook} handleClose={handleClose}/>
                </Modal.Body>
            </Modal>
            
            <li key={book.id} className="book">
                <h5>Yoshi's Library</h5>
                <p>Book Name: {book.name}</p>
                <p>Author: {book.author}</p>
                <p>Genre: {book.genre}</p>
                <div>
                    <button className="edit" onClick={handleShow}>Edit</button>
                    <button className="remove" onClick={handleRemove} >Remove</button>
                </div>
                <hr />
            </li>
        </>
    );
}

export default Book;
