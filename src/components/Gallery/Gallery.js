import React, { useEffect, useState } from 'react';
import Book from '../Book/Book';
import BookDetails from '../BookDetails/BookDetails';
import './Gallery.css'

const Gallery = () => {
    const [books, setBooks] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect( ()=>{
        fetch('data.json')
        .then(res=>res.json())
        .then(data=>setBooks(data))
    },[]);
    const handleAddToCard = (book) =>{
        const newCart = [...cart, book];
        setCart(newCart);
    }
    
    
    return (
        <div className='gallery'>
            <div className='books'>
            {
                books.map((book)=> <Book 
                    key={book.id} 
                    book={book}
                    handleAddToCard ={handleAddToCard}
                ></Book>)
            }

            </div>
            <div className='books-cart'>
                <BookDetails 
                    cart={cart}
                ></BookDetails>

            </div>
            
            
        </div>
    );
};

export default Gallery;