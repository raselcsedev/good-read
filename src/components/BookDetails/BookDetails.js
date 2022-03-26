import React from 'react';
import './BookDetails.css'

const BookDetails = ({cart}) => {
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
                    
                    <button className='button'>Choose 1 for me</button>
                    <button className='button'>Choose again</button>
                </div>
            </div>

            
        </div>
    );
};

export default BookDetails;