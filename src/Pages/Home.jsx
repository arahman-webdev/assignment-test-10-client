import React, { useEffect, useState } from 'react';
import Slider from '../Components/Slider';
import { FaArrowRightLong } from "react-icons/fa6";
import Review from './Review';
import Questions from '../HomeComponents/Questions';
import { Link, useLoaderData } from 'react-router-dom';


const Home = () => {

    const reviews = useLoaderData()

    // const [reviews, setReviews] = useState([])
    // useEffect(() => {
    //     fetch('http://localhost:5000/reviews')
    //         .then(res => res.json())
    //         .then(data => setReviews(data))
    // }, [])


    return (
        <div className='w-full mx-auto bg-[#060D15] font-Roboto'>
            <div className='font-poppins'>
                <Slider></Slider>
            </div>
            <section className='pt-20 pb-20 w-4/5 mx-auto '>
            <input type="checkbox" value="synthwave" className="toggle theme-controller" />
                <div>
                    <h2 className='text-5xl font-bold text-[#CDF7FF] uppercase space-x-7 text-center mb-10'>About Us</h2>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 gap-16'>
                    <div className='relative'>
                        <div className='border rounded-3xl'><img className='rounded-3xl' src="https://i.ibb.co.com/mS7FnZZ/about.webp" alt="" /></div>
                        <div className="absolute inset-0 bg-[#111] bg-opacity-45"></div>
                    </div>
                    <div className=" text-[#CDF7FF] py-20 px-8">


                        {/* Header Section */}
                        <div className=" mb-12">
                            <h4 className="bg-[#253849] font-bold uppercase mb-4 inline-block p-4 rounded-sm text-[#2badc4]">Who We Are</h4>
                            <div>
                                <h2 className="text-5xl font-bold leading-relaxed">
                                    Our Best Experience a Magic<br /> of The World Popular Game
                                </h2>
                                <p className='py-16'>As Gamestorm, we continue to open doors to new worlds every day and are working excitedly to collect new games' review and unique ideas to play the best popular game in the world!</p>
                            </div>
                        </div>


                        {/* Features Section */}
                        <div className=" gap-10 max-w-5xl mx-auto">
                            {/* Feature 1 */}
                            <div className="flex items-start">
                                <div className="text-4xl mr-4 text-[#26c6da]">
                                    {/* Example Icon */}
                                    <i className="fas fa-gem"></i>
                                </div>
                                <div>
                                    <h3 className="text-2xl font-semibold mb-2">Game playing plan</h3>
                                    <p className='text-[#6da9b1]'>
                                        Strategize game time, focus on skill-building, explore levels methodically, collaborate with players, and balance practice with enjoyment for success.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Call to Action */}
                        <div className="text-center mt-10 w-full">
                            <button className="px-6 py-3 bg-[#26c6da] w-full text-black font-semibold rounded-full hover:bg-[#20b3c7] transition duration-150  flex items-center justify-center group">
                                Know More
                                <FaArrowRightLong size={25} className="ml-2 transition-transform duration-300 group-hover:translate-x-2" />
                            </button>
                        </div>
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
                <div className="text-center mt-10 w-full flex justify-center">
                    <Link to='/all-reviews' className="px-16 py-3 bg-[#26c6da] text-black font-semibold  rounded-3xl hover:bg-[#20b3c7] transition duration-150  flex justify-between items-center group">
                        More Reviews
                        <FaArrowRightLong size={25} className="ml-2 transition-transform duration-300 group-hover:translate-x-2" />
                    </Link>
                </div>
            </section>
            <section>
                <Questions></Questions>
            </section>
        </div>
    );
};

export default Home;