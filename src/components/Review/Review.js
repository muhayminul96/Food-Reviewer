import React from 'react';
import './Review.css'
const Review = (props) => {
    const {name,rating,reviewText} = props.review
    return (
        <div className='review-info'>
            <p> rating {rating}</p>
            <p title={reviewText}>{reviewText.length > 150 ? reviewText.slice(0,147) + '...' : reviewText}</p>
            
            <div className='reviewer-info'>
                <h3>{name}</h3>
            </div>
            
        </div>
    );
};

export default Review;