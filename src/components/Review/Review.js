import React from 'react';
import './Review.css'
import ReactStars from "react-rating-stars-component";


const Review = (props) => {
    const {picture,name,rating,reviewText} = props.review

    return (
        <div className='review-info'>
             <div className="stars">
             <ReactStars
                count={rating} 
                size={34}
                color="#333C83"
                activeColor="#333C83"
             />
             <ReactStars
                count={5-rating}
                size={34}
                color='#F24A72'
                activeColor='#F24A72'
                
             />
  
             </div>
             
            <p title={reviewText}>{reviewText.length > 150 ? reviewText.slice(0,147) + '...' : reviewText}</p>
            
            <div className='reviewer-info'>
                <img src={picture} alt="" />
                <h3>{name}</h3>
                
            </div>
            
        </div>
    );
};

export default Review;