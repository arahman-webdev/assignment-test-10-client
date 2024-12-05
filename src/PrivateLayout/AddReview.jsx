import React, { useContext } from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { AuthContext } from '../AuthProvider';
import { Typewriter } from 'react-simple-typewriter'
import review from '../assets/images/addReview.jpg'
import Swal from 'sweetalert2';
const AddReview = () => {

    const { user } = useContext(AuthContext)

    const handleAddReview = e => {
        e.preventDefault();
     
        
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const gameTitle = form.gametitle.value;
        const genre = form.genre.value;
        const rating = form.rating.value;
        const publishingYear = form.publishingYear.value;
        const photoUrl = form.photourl.value;
        const reviewDescription = form.reviewDescription.value;
        const reviewInfo = {name, email, gameTitle, genre, rating, publishingYear, photoUrl, reviewDescription}
        console.log(reviewInfo)
        fetch('http://localhost:5000/reviews', {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(reviewInfo)
        })
        .then(res =>res.json())
        .then(data => {
            console.log(data)
            if(data.insertedId){
                Swal.fire({
                    title: "Good job!",
                    text: "You added the review!",
                    icon: "success"
                  });
            }
        })

    }
    return (
        <div className='bg-[#060D15]'>

            <Navbar></Navbar>

            <main className='bg-[#010407]'>
                <div>
                    <div className="bg-cover bg-center" style={{ backgroundImage: "url('https://i.ibb.co.com/YQv3WYt/add-Review.jpg')" }}>
                        <div className='pt-44 pb-44 pl-36'>
                            <h2 className='text-7xl font-serif font-bold text-[#CDF7FF] shadow-2xl shadow-black' style={{ textShadow: '0 0 3px #ff0000, 0 0 5px #0000ff' }}>Write Your Review</h2>
                        </div>
                    </div>
                    <div className='bg-[#102638] text-[#CDF7FF] w-4/5 mx-auto mt-10 mb-10 rounded-lg shadow-2xl'>
                        <div className='p-10 text-center'>
                            <h2>Add New Coffee</h2>

                            <p>It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>
                        </div>
                        <div>
                            <div className="card  w-full  shrink-0 shadow-2xl">
                                <form onSubmit={handleAddReview} className="card-body">



                                    {/* name and email ---------------------------------*/}
                                    <div className="flex gap-4 ">
                                        <div className="form-control w-full">
                                            <label className="label">
                                                <span className="label-text text-[#CDF7FF]">Name</span>
                                            </label>
                                            <input type="text" placeholder="name" name='name' value={user ? user.displayName : ""} readOnly className="input input-bordered bg-[#101A23]" required />
                                        </div>
                                        <div className="form-control w-full">
                                            <label className="label">
                                                <span className="label-text text-[#CDF7FF]">Email</span>
                                            </label>
                                            <input type="email" placeholder="name" name='email' value={user ? user.email : ""} readOnly className="input input-bordered bg-[#101A23]" required />
                                        </div>
                                    </div>

                                    {/* title and genre------------------------------------ */}
                                    <div className="flex gap-4">
                                        <div className="form-control w-full">
                                            <label className="label">
                                                <span className="label-text text-[#CDF7FF]">Game Title</span>
                                            </label>
                                            <input type="text" placeholder="Enter Game Title" name='gametitle' className="input input-bordered bg-[#101A23]" required />
                                        </div>
                                        <div className='form-control w-full'>
                                            <label htmlFor="genre" className="block mb-2">Genre</label>
                                            <select
                                                id="genre"
                                                name="genre"
                                                required
                                                className="w-full p-2 border rounded bg-[#101A23]"
                                            >
                                                <option value="Action">Action</option>
                                                <option value="RPG">RPG</option>
                                                <option value="Adventure">Adventure</option>
                                                <option value="Strategy">Strategy</option>
                                            </select>
                                        </div>
                                    </div>


    

                                    {/* rating and data ---------------------- */}
                                    <div className="flex gap-4">
                                        <div className="form-control w-full">
                                            <label className="label">
                                                <span className="label-text text-[#CDF7FF]">Rating (1-5)</span>
                                            </label>
                                            <input type="text" placeholder="Write rating"  name='rating' className="input input-bordered bg-[#101A23]" required />
                                        </div>
                                        
                                        <div className="form-control w-full">
                                            <label className="label">
                                                <span className="label-text text-[#CDF7FF]">Publishing Year</span>
                                            </label>
                                            <input type="text" placeholder="Write year" name='publishingYear' min="2009" max={new Date().getFullYear()} className="input input-bordered bg-[#101A23]" required />
                                        </div>
                                    </div>

                                    <div className="flex gap-4">
                                        <div className="form-control w-full">
                                            <label className="label">
                                                <span className="label-text text-[#CDF7FF]">Photo Url</span>
                                            </label>
                                            <input type="text" placeholder="photo url" name='photourl' className="input input-bordered bg-[#101A23]" required />
                                        </div>
                                    </div>


                                    <div className="form-control w-full">
                                        <label className="label">
                                            <span className="label-text text-[#CDF7FF]">Review Description</span>
                                        </label>
                                        <textarea
                                            id="reviewDescription"
                                            name="reviewDescription"
                                            placeholder="Write your detailed review"
                                            required
                                            className="w-full p-2 border rounded bg-[#101A23]"
                                            rows="4" cols="50"
                                        />
                                    </div>

                                    <div className="form-control mt-6">
                                        <button className="btn bg-[#101A23] text-white">Add Coffee</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer></Footer>
        </div>
    );
};

export default AddReview;



{/* <h1 style={{ paddingTop: '5rem', margin: 'auto 0', fontWeight: 'normal' }}>
Life is simple{' '}
<span style={{ color: 'red', fontWeight: 'bold' }}>
    {/* Style will be inherited from the parent element */}
// <Typewriter
//     words={['Eat', 'Sleep', 'Code', 'Repeat!']}
//     loop={5}
//     cursor
//     cursorStyle='_'
//     typeSpeed={70}
//     deleteSpeed={50}
//     delaySpeed={1000}
// onLoopDone={handleDone}
// onType={handleType}
// />
// </span>
// </h1>