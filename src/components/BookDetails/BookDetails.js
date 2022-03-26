import React, { useState } from 'react';
import './BookDetails.css'

const BookDetails = ({cart}) => {
    const [book, setBook] =useState([])
    if(cart.length > 4){
        alert('SORRY ! You can not add more than 4 books');
        cart.length=4;
    }

    const chooseBookRandomly =(item) =>{
        let book = item[Math.floor(Math.random()* item.length)];
        console.log(book);
        setBook(book);
        item.length =0;
    }

    const removeBooks =(cart) => {
        setBook(cart);
        cart.length=0;
    }

    
    return (
        <div className='cart'>
            <div >
                <h2>Selected Books : {cart.length}</h2>
                <div>
                    {
                        cart.map((item)=>
                            <h4 key={item.id} >{item.name}</h4>
                        )
                    }
                    
                    <h3 className='book-name'>{book.name}</h3>
                    <button className='button' onClick={()=>chooseBookRandomly(cart)}>Choose One</button>
                    <button className='button' onClick={()=>removeBooks(cart)}>Choose Again</button>
                </div>
            </div>

            
        </div>
    );
};

export default BookDetails;