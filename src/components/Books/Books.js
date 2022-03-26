import React, { useEffect, useState } from 'react';
import Book from '../Book/Book';
import './Books.css'

const Books = () => {
    const [books, setBooks] = useState([]);
    useEffect( ()=>{
        fetch('data.json')
        .then(res=>res.json())
        .then(data=>setBooks(data))
    },[]);
    const handleAddToCard = () =>{
        console.log('clicked');
    }
    return (
        <div className='books'>
            {
                books.map((book)=> <Book 
                key={book.id} 
                book={book}
                handleAddToCard ={handleAddToCard}
                ></Book>)
            }
            
        </div>
    );
};

export default Books;