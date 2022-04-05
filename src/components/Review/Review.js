import React from 'react';

const Review = (props) => {
    const {name,rating,reviewText} = props.review
    return (
        <div>
            <h2>{name}</h2>
            <p>{reviewText}</p>
            <p>{rating}</p>
        </div>
    );
};

export default Review;