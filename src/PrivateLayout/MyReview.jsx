import React, { useContext } from 'react';
import { AuthContext } from '../AuthProvider';
import { useLoaderData } from 'react-router-dom';

const MyReview = () => {

    const {user} = useContext(AuthContext)
    const reviews = useLoaderData()

    const userReviews = user? reviews.filter(review => review.email === user.email): [];

    console.log(userReviews)
    return (
        <div>
            
        </div>
    );
};

export default MyReview;