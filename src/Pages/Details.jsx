import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../AuthProvider";
import { FaStar } from "react-icons/fa";
import Swal from "sweetalert2";

const Details = () => {
    const { user } = useContext(AuthContext)
    const review = useLoaderData();
    console.log(review)

    const handleWatchList = () => {
        if (user) {


            const coverPhoto = review?.photoUrl;
            const title = review?.gameTitle
            const reviewer = review?.name;
            const reviewerEmail = review?.email;
            const reviewerRating = review?.rating;
            const genre = review?.genre;
            const reviewerDescription = review?.reviewDescription;

            const detailInfor = {coverPhoto, title, reviewer, reviewerEmail, reviewerRating, genre, reviewerDescription }

            fetch('http://localhost:5000/watchlists', {
                method: "POST",
                headers: {
                    "Content-type": "application/json",
                },
                body: JSON.stringify(detailInfor)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if(data.insertedId.length <0){
                        Swal.fire({
                            title: "Good job!",
                            text: "You Added to WatchList!",
                            icon: "success"
                          });
                    }else{
                        Swal.fire({
                            icon: "error",
                            title: "Oops...",
                            text: "You have already added! Try another",
                            
                          });
                    }
                })
        }


    }
    return (
        <div className="bg-black text-[#CDF7FF] py-20">
            <div className="p-6 w-4/5 mx-auto">
                <div className="lg:flex gap-10">
                    <div>
                        <img
                            src={review.photoUrl}
                            alt={review.gameTitle}
                            className="w-96 h-96 object-cover rounded-lg"
                        />
                    </div>
                    <div>
                        <div className="space-y-6">
                            <h1 className="text-4xl font-bold mt-4">{review.gameTitle}</h1>
                            <p className="mt-2 text-gray-700">{review.reviewDescription}</p>
                            <span className="ml-2 text-yellow-500 flex">
                                {Array.from({ length: 5 }, (_, index) => (
                                    <FaStar key={index} className={index < Math.floor(review.rating) ? 'text-yellow-500' : 'text-gray-300'} />
                                ))}
                            </span>
                        </div>
                        <div className="border my-10"></div>
                        <div className="space-y-3">
                            <p className="mt-2">Genre: {review.genre}</p>
                            <p className="mt-2">Reviewer: {review.name}</p>
                            <p className="mt-2 text-gray-500">Email: {review.email}</p>
                        </div>
                        <button
                            onClick={handleWatchList}
                            className="mt-4 px-4 py-2 bg-[#CDF7FF] text-black rounded-lg hover:bg-[#9ad5e0]"
                        >
                            Add to WatchList
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;