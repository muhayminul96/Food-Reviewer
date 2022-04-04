import React from 'react';
import useReview from '../customHook/useReview';
import './Home.css'

const Home = () => {
    const [reviews,setReviews] = useReview()
    return (
       <div>
            <div className='home-banner'>
                <div className="main-text-part">
                    <h1 className='res-name'>Frying Nemo </h1>
                    <h1 className='food-name'>Gochew Grill Salad</h1>
                    <p>
                    This a main food of our restudent, it is good for our all ages people. It is a couple ploter and it has a man  to sse. lots of coustomer are review it it is most impportant of our man so you can drink it, and see the review 
                    </p>
                </div>
                <img src="https://images.pexels.com/photos/1092730/pexels-photo-1092730.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" />
            </div>
            <div className="review-container">
                <h1> Review </h1>
                <div className="review-part">
                    {
                        reviews.slice(0,3).map(review => console.log(review))
                    }
                </div>
            </div>
       </div>
    );
};

export default Home;