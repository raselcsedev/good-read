import React from 'react';
import './Book.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

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
            <button className='btn-cart'>
                    <p className='btn-text'>Add to Cart</p>
                    <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
                </button>
        </div>
    );
};

export default Book;