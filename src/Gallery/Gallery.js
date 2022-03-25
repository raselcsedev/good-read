import React from 'react';
import BookDetails from '../components/BookDetails/BookDetails';
import Books from '../components/Books/Books';
import './Gallery.css'

const Gallery = () => {
    return (
        <div className='gallery'>
            <Books></Books>
            <BookDetails></BookDetails>
        </div>
    );
};

export default Gallery;