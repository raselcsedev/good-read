import React from 'react';
import './Book.css'

const Book = (props) => {
    const {name, img, author,price} =props.book
    return (
        <div className='book'>
            <img src={img} alt="" />
            <div className='book-info'>
            <h3>{name}</h3>
            <p>Author : {author}</p>
            <p><small>Price : ${price}</small></p>
            </div>
        </div>
    );
};

export default Book;