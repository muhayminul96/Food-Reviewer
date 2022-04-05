import React from 'react';
import './Reviews.css'
import useReview from '../customHook/useReview';
import Review from '../Review/Review';

const Reviews = () => {
    const [reviews,setReviews] = useReview()
    return (
        <div>
            <h1> All Review </h1>
            <div className="reviews-container">
                    {
                        reviews.map(review => <Review 
                        key={review._id}
                        review ={review}
                        ></Review>)
                    }
                </div>
        </div>
    );
};

export default Reviews;