import React, { useEffect, useState } from 'react';
import Book from '../Book/Book';
import './Books.css'

const Books = () => {
    const [books, setBooks] = useState([]);
    useEffect( ()=>{
        fetch('data.json')
        .then(res=>res.json())
        .then(data=>setBooks(data))
    },[])
    return (
        <div className='books'>
            {
                books.map((book)=> <Book 
                key={book.id} 
                book={book}
                ></Book>)
            }
            
        </div>
    );
};

export default Books;