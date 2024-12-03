import { Link, NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const [dropdownOpen, setDropdownOpen] = useState(false);


    console.log(user)

    const handleSignOut = () => {
        logOut()
            .then(() => {
                console.log("User logged out");
                setDropdownOpen(false);
            })
            .catch((error) => {
                console.error("Sign out error:", error);
            });
    };

    const links = (
        <>
            <NavLink to="/" className="flex items-center gap-1">
               
                Home
            </NavLink>
            <NavLink to="/brands" className="flex items-center gap-1">
                
                Brands
            </NavLink>

            <NavLink to='/about' className="flex items-center gap-1">
            
            </NavLink>
        </>
    );



    return (
        <div>
            {
                user? <div className="text-center pt-6 pb-6 bg-[#F4F5FE] text-[#024077] font-bold text-2xl">Welcome {user.displayName}</div>:''
            }
            <div className="bg-[#10058C] w-full p-5 z-50">


                <div className="navbar w-4/5 mx-auto">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                <i className="text-white font-semibold">
                                    <FaBars size={25} />
                                </i>
                            </div>
                            <ul
                                tabIndex={0}
                                className="dropdown-content mt-3 w-[495px] p-2 text-2xl z-50 -left-20 bg-[#10058C] text-[#ffffffa6]"
                            >
                                {links}
                            </ul>
                        </div>
                        <Link to='/' className="text-xl text-white font-bold"><span className="text-xl font-serif font-extrabold">BD</span> CouponCraze</Link>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1 gap-6 text-xl font-semibold text-[#ffffffa6]">
                            {links}
                        </ul>
                    </div>
                    <div className="navbar-end text-[#ffffffa6]">
                        {user ? (
                            <div className="relative">
                                <img
                                    src={user.photoURL || "/default-avatar.png"}
                                    alt="User"
                                    className="w-10 h-10 rounded-full cursor-pointer"
                                    onClick={() => setDropdownOpen(!dropdownOpen)}
                                />
                                {dropdownOpen && (
                                    <div className="absolute right-0 mt-2 bg-[#F4F5FE] shadow-md rounded-lg  z-50 border w-[300px] p-8">
                                        <div className="w-500px">
                                            <div>
                                                <img 
                                                className="w-10 h-10 rounded-full mx-auto"
                                                src={user.photoURL} alt="" />
                                            </div>
                                        <p className="text-gray-700 font-semibold text-center">{user.displayName || "User"}</p>
                                        <hr className="my-2" />
                                        <button
                                            onClick={handleSignOut}
                                            className="block w-full text-left px-4 py-2 text-red-600 hover:bg-[#e4e6f8] rounded flex items-center gap-2"
                                        >
                                            <FaSignOutAlt />
                                            Sign Out

                                        </button>
                                        </div>
                                    </div>
                                )}
                            </div>
                        ) : (
                            <Link to="/auth/login" className=" bg-[#0d81fd] rounded-none px-6 py-2 text-white">
                                Login
                            </Link>
                        )}
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Navbar;