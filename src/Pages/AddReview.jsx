import React, { useContext } from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { Outlet } from 'react-router-dom';
import { AuthContext } from '../AuthProvider';

const AddReview = () => {

    const {name} = useContext(AuthContext)

    const handleAddReview = e =>{
        e.preventDefault();
       
    }
    return (
        <div>
            <nav>
                <Navbar></Navbar>
            </nav>
            <main>
                <div>
                    <div className='bg-[#F4F3F0] w-4/5 mx-auto mt-10 mb-10'>
                        <div className='p-10 text-center'>
                            <h2>Add New Coffee</h2>
                            <p>It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>
                        </div>
                        <div>
                            <div className="card  w-full  shrink-0 shadow-2xl">
                                <form onSubmit={handleAddReview} className="card-body">
                                    <div className="flex gap-4">
                                        <div className="form-control w-full">
                                            <label className="label">
                                                <span className="label-text">Name</span>
                                            </label>
                                            <input type="text" placeholder="name" name='name' className="input input-bordered" required />
                                        </div>
                                        <div className="form-control w-full">
                                            <label className="label">
                                                <span className="label-text">Chef</span>
                                            </label>
                                            <input type="text" placeholder="chef" name='chef' className="input input-bordered" required />
                                        </div>
                                    </div>

                                    <div className="flex gap-4">
                                        <div className="form-control w-full">
                                            <label className="label">
                                                <span className="label-text">Category</span>
                                            </label>
                                            <input type="text" placeholder="category" name='category' className="input input-bordered" required />
                                        </div>
                                        <div className="form-control w-full">
                                            <label className="label">
                                                <span className="label-text">Price</span>
                                            </label>
                                            <input type="text" placeholder="price" name='price' className="input input-bordered" required />
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="form-control w-full">
                                            <label className="label">
                                                <span className="label-text">Photo Url</span>
                                            </label>
                                            <input type="text" placeholder="photo url" name='photourl' className="input input-bordered" required />
                                        </div>
                                    </div>
                                    <div className="form-control mt-6">
                                        <button className="btn bg-[#D2B48C]">Add Coffee</button>
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