import React, { useContext, useState } from 'react';
import { AuthContext } from '../AuthProvider';
import { Link, useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';
import { MdDelete } from "react-icons/md";
import { FaStar } from 'react-icons/fa';
const MyReview = () => {

  const { user } = useContext(AuthContext)
  const reviews = useLoaderData()

  const loadedUserReviews = user ? reviews.filter(review => review.email === user.email) : [];

  const [userReviews, setUserReviews] = useState(loadedUserReviews)

  console.log(userReviews)

  const handleDelete = (id) => {


    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
      color: "#111",
      width: '450px',
      background: "#CDF7FF"
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/reviews/${id}`, {
          method: "DELETE",
        })
          .then(res => res.json())
          .then(data => {
            console.log(data)
            if (data.deletedCount > 0) {

              Swal.fire({
                title: "Good job!",
                text: "You added the review!",
                icon: "success",
                color: "#111",
                width: '450px',
                background: "#CDF7FF"
              });

            }

            const remainingReviews = userReviews.filter(review => review._id !== id)
            setUserReviews(remainingReviews)
          })

      }
    });
  }


  return (
    <div className='bg-[#102638]'>
      <div className="w-4/5 mx-auto py-16">
        <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-black py-8 text-center mb-5">
          <h1
            className="text-5xl font-bold uppercase tracking-wide text-transparent bg-clip-text"
            style={{
              WebkitTextStroke: '1px #CDF7FF', // Outline color
              WebkitTextFillColor: 'transparent', // Transparent fill
            }}
          >
            MY REVIEW LISTS
          </h1>
        </div>
        {userReviews.length > 0 ? (
          <table className="table-auto w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-[#060D15] text-[#CDF7FF]">
                <th className="border border-gray-300 px-4 py-2">Game Title</th>
                <th className="border border-gray-300 px-4 py-2">Rating</th>
                <th className="border border-gray-300 px-4 py-2">Reviewer</th>
                <th className="border border-gray-300 px-4 py-2">Update/Delete</th>
              </tr>
            </thead>
            <tbody>
              {userReviews.map((review) => (
                <tr key={review._id} className="text-center hover:bg-[#060D15] text-[#CDF7FF] hover:text-[#CDF7FF]">
                  <td className="border border-gray-300 px-4 py-2">{review.gameTitle}</td>
                  <td className="border border-gray-300 px-4 py-2">
                    <span className="ml-2 text-yellow-500 flex">
                      {Array.from({ length: 5 }, (_, index) => (
                        <FaStar key={index} className={index < Math.floor(review.rating) ? 'text-yellow-500' : 'text-gray-300'} />
                      ))}
                    </span>
                  </td>
                  <td className="border border-gray-300 px-4 py-2">{review.name}</td>
                  <td className="border border-gray-300 px-4 py-2 flex justify-center items-center gap-3">
                    <Link className='font-semibold bg-blue-500 px-4 py-2 rounded-md' to={`/update/${review._id}`}>UPDATE</Link>
                    <button
                      className=" py-1 px-4 text-3xl bg-[#1a4270ad] rounded-md"
                      onClick={() => handleDelete(review._id)}
                    >
                      <MdDelete />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <div className='py-24'>
            <p className="text-red-400">No reviews available.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyReview;