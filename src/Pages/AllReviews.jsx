import React from 'react';
import Navbar from '../Components/Navbar';
import { useLoaderData } from 'react-router-dom';
import Footer from '../Components/Footer';
import Review from './Review';

const AllReviews = () => {
    const reviews = useLoaderData()
    return (
        <div className='bg-[#060D15]'>
            <Navbar></Navbar>

            <section>
                <div className="relative bg-cover bg-center" style={{ backgroundImage: "url('https://i.ibb.co.com/Rywj4hP/reviews-banner.jpg')" }}>
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-[#10058c] bg-opacity-45"></div>

                    {/* Content */}
                    <div className="relative pt-44 pb-44 md:pt-[500px] md:pb-28 pl-36">
                    </div>
                </div>
            </section>
            <section className='w-4/5 mx-auto pt-20 pb-28'>
                <div>
                    <h1 className='text-7xl font-Roboto font-bold text-[#CDF7FF] pt-10 pb-11'>Our Games Review</h1>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7'>
                    {
                        reviews.map(review => <Review key={review._id} review={review}></Review>)
                    }
                </div>
            </section>
            <Footer></Footer>
        </div>
    );
};

export default AllReviews;