import { Link, NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa";

const Navbar = () => {


    const links = (
        <>
            <NavLink to="/" className="flex items-center gap-1 hover:text-[#0d83fd]">

                Home
            </NavLink>
            <NavLink to="/all-reviews" className="flex items-center gap-1 hover:text-[#0d83fd]">

                All Reviews
            </NavLink>

            <NavLink to='/add-review' className="flex items-center gap-1 hover:text-[#0d83fd]">Add Review</NavLink>
            <NavLink to='/watch-list' className="flex items-center gap-1 hover:text-[#0d83fd]">Game WatchList</NavLink>


        </>
    );



    return (
        <div className="w-full shadow-xl rounded-md">
            <div className="navbar   w-4/5 mx-auto p-7">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow gap-5 ">
                            {links}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">daisyUI</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 gap-5  font-Roboto text-[#212529] text-base">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end">
                <NavLink to='/auth/register' className="flex items-center gap-1 hover:text-[#0d83fd]">register</NavLink>
                <NavLink to='/auth/login' className="flex items-center gap-1 hover:text-[#0d83fd]">Login</NavLink>
                </div>
            </div>
        </div>
    );
};

export default Navbar;