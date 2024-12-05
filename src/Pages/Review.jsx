import React from 'react';

const Review = ({review}) => {

    const {_id, name, email, gameTitle, genre, rating, publishingYear, photoUrl, reviewDescription} = review || {}
    return (
        <div className='p-3 border border-[#50799b] bg-[#102638] hover:-translate-y-2 transition ease-in duration-200 shadow-xl rounded-lg'>
            <div className='relative'>
                <img className='w-full h-52' src={photoUrl} alt="" />
                <div className="absolute inset-0 bg-[#111] bg-opacity-45"></div>
            </div>
            <div className='text-center text-[#CDF7FF] p-10 space-x-7'>
                <h3 className='text-4xl font-semibold pb-4'>{gameTitle}</h3>
                <p>{reviewDescription}</p>
            </div>
            <div className='flex justify-center'>
                <button className='bg-[#CDF7FF] px-4 py-2'>Explore Details</button>
            </div>
        </div>
    );
};

export default Review;