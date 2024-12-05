import { FaFacebookF, FaTwitter, FaYoutube } from "react-icons/fa";


const Footer = () => {
  return (
    <footer className=" text-gray-100 py-10 bg-[#101A23]">
      <div className=" py-12 px-6">
        <div className="max-w-4xl mx-auto flex items-center justify-between space-x-4">
          {/* Text */}
          <h2 className="text-3xl font-bold text-[#CDF7FF]">Get News & Latest Updates</h2>

          {/* Input and Button */}
          <div className="flex items-center space-x-2">
            {/* Input Field */}
            <input
              type="email"
              placeholder="Your email address"
              className="bg-[#0c0f15] text-[#8b97a2] placeholder-[#8b97a2] px-4 py-3 rounded-md focus:outline-none w-full lg:w-80"
            />

            {/* Button */}
            <button className="bg-[#CDF7FF] text-[#0c0f15] font-bold px-6 py-3 rounded-md flex items-center space-x-2">
              <span>SIGN UP</span>
              {/* Arrow Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.25 4.75l5.5 5.5m0 0l-5.5 5.5m5.5-5.5H6"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

    <div className="border-t border-[#809DA5] mb-20 w-4/5 mx-auto">

    </div>

      <div className="container mx-auto px-4 ">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* First Column start*/}
          <div>
            <div>
              <h2 className="text-xl font-semibold  mb-4 text-[#6facbe]">BD CouponCraze</h2>
              <div className="text-[#809DA5]">
                <p>Sherpur</p>
                <p>Sherpur, Bogura 5840</p>
              </div>
              <p className="text-[#809DA5] font-semibold">Phone: <a href="+8801719617907" className="text-[#549aad]">+8801719617907</a></p>
              <p className="text-[#809DA5] font-semibold">Email: <a href="mailto:info@example.com" className="text-[#549aad]">abdurrahman@gmail.com</a></p>
            </div>
            <div className="flex gap-4 pt-3">
              <a href="https://www.facebook.com/" className="p-3 bg-white text-[#10058C] rounded-md"><i><FaFacebookF></FaFacebookF></i></a>
              <a href="https://twitter.com" className="p-3 bg-white text-[#10058C] rounded-md"><i><FaTwitter></FaTwitter></i></a>
              <a href="https://www.youtube.com/" className="p-3 bg-white text-[#10058C] rounded-md"><i><FaYoutube></FaYoutube></i></a>
            </div>
          </div>

          {/* Second Column start*/}
          <div>
            <h2 className="text-xl font-semibold text-[#6facbe] mb-4">Useful Links</h2>
            <ul className="text-[#809DA5]">
              <li><a href="/" className="hover:text-blue-500 transition">Home</a></li>
              <li><a href="/about" className="hover:text-blue-500 transition">About Us</a></li>
              <li><a href="/brands" className="hover:text-blue-500 transition">All Brands</a></li>
              <li><a href="/#" className="hover:text-blue-500 transition">Terms of Service</a></li>
            </ul>
          </div>

          {/* Third Column end*/}
          <div>
            <h2 className="text-xl font-semibold  mb-4 text-[#6facbe]">Our Services</h2>
            <p className="text-[#809DA5]">We provide top-notch solutions for finding and managing coupon codes, helping you save money effortlessly. Discover deals, streamline your shopping, and unlock discounts with our reliable and user-friendly services.</p>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-10 border-t border-[#809DA5] pt-6 text-center text-[#809DA5]">
          <p>© Copyright BD CouponCraze. All Rights Reserved</p>
          <p>Designed by <a href="https://github.com/arahman225" className="text-[#CDF7FF] hover:text-[#cdf7ffb7]">Abdurrahman</a></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;