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
                <h1 >Selected Books : {cart.length}</h1>
                <div>
                    {
                        cart.map((item)=>
                            <h4 key={item.id} >{item.name}</h4>
                        )
                    }
                    
                    <h1>{book.name}</h1>
                    <button className='button' onClick={()=>chooseBookRandomly(cart)}>Choose 1 for me</button>
                    <button className='button' onClick={()=>removeBooks(cart)}>Choose again</button>
                </div>
            </div>

            
        </div>
    );
};

export default BookDetails;