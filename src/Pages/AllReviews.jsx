import React, { useState, useEffect } from 'react';
import Navbar from '../Components/Navbar';
import { useLoaderData } from 'react-router-dom';
import Footer from '../Components/Footer';
import Review from './Review';

const AllReviews = () => {
  const initialReviews = useLoaderData(); // Load initial reviews
  const [reviews, setReviews] = useState(initialReviews); // Store filtered/sorted reviews
  const [sortOption, setSortOption] = useState(''); // Track sorting option
  const [filterGenre, setFilterGenre] = useState(''); // Track selected genre filter

  useEffect(() => {
    // Apply sorting and filtering whenever sortOption or filterGenre changes
    let sortedAndFilteredReviews = [...initialReviews];

    // Filter by genre
    if (filterGenre) {
      sortedAndFilteredReviews = sortedAndFilteredReviews.filter(
        (review) => review.genre.toLowerCase() === filterGenre.toLowerCase()
      );
    }

    // Sort by year or rating
    if (sortOption === 'rating-asc') {
      sortedAndFilteredReviews.sort((a, b) => a.rating - b.rating);
    } else if (sortOption === 'year-asc') {
      sortedAndFilteredReviews.sort((a, b) => a.year - b.year);
    }

    setReviews(sortedAndFilteredReviews);
  }, [sortOption, filterGenre, initialReviews]);

  return (
    <div className='bg-[#060D15]'>
      <Navbar></Navbar>

      {/* Banner Section */}
      <section>
        <div className="relative bg-cover bg-center" style={{ backgroundImage: "url('https://i.ibb.co.com/Rywj4hP/reviews-banner.jpg')" }}>
          {/* Overlay */}
          <div className="absolute inset-0 bg-[#10058c] bg-opacity-45"></div>
          {/* Content */}
          <div className="relative pt-44 pb-44 md:pt-[500px] md:pb-28 pl-36">
          </div>
        </div>
      </section>

      {/* Sort and Filter Section */}
      <section className='w-4/5 mx-auto pt-10'>
        <div className="flex justify-between items-center mb-6">
          <div>
            <label htmlFor="sort" className="text-white mr-3">Sort By:</label>
            <select
              id="sort"
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value)}
              className="border px-4 py-2 rounded"
            >
              <option value="">Select</option>
              <option value="rating-asc">Rating (Low to High)</option>
              <option value="year-asc">Year (Oldest to Newest)</option>
            </select>
          </div>

          <div>
            <label htmlFor="filter" className="text-white mr-3">Filter By Genre:</label>
            <select
              id="filter"
              value={filterGenre}
              onChange={(e) => setFilterGenre(e.target.value)}
              className="border px-4 py-2 rounded"
            >
              <option value="">Select Genre</option>
              <option value="Action">Action</option>
              <option value="Adventure">Adventure</option>
              <option value="RPG">RPG</option>
              <option value="Shooter">Shooter</option>
            </select>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className='w-4/5 mx-auto pt-10 pb-28'>
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
