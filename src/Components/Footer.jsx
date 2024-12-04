import { FaFacebookF, FaTwitter, FaYoutube   } from "react-icons/fa";


const Footer = () => {
    return (
      <footer className=" text-gray-100 py-10 bg-[#101A23]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* First Column start*/}
            <div>
            <div>
              <h2 className="text-xl font-semibold  mb-4 text-black">BD CouponCraze</h2>
              <div className="text-[#212529]">
              <p>Sherpur</p>
              <p>Sherpur, Bogura 5840</p>
              </div>
              <p className="text-black font-semibold">Phone: <a href="+8801719617907" className="text-blue-500">+8801719617907</a></p>
              <p className="text-black font-semibold">Email: <a href="mailto:info@example.com" className="text-blue-500">abdurrahman@gmail.com</a></p>
            </div>
            <div className="flex gap-4 pt-3">
              <a href="https://www.facebook.com/" className="p-3 bg-white text-[#10058C] rounded-md"><i><FaFacebookF></FaFacebookF></i></a>
              <a href="https://twitter.com" className="p-3 bg-white text-[#10058C] rounded-md"><i><FaTwitter></FaTwitter></i></a>
              <a href="https://www.youtube.com/" className="p-3 bg-white text-[#10058C] rounded-md"><i><FaYoutube></FaYoutube></i></a>
            </div>
            </div>
  
            {/* Second Column start*/}
            <div>
              <h2 className="text-xl font-semibold text-black mb-4">Useful Links</h2>
              <ul className="text-[#212529]">
                <li><a href="/" className="hover:text-blue-500 transition">Home</a></li>
                <li><a href="/about" className="hover:text-blue-500 transition">About Us</a></li>
                <li><a href="/brands" className="hover:text-blue-500 transition">All Brands</a></li>
                <li><a href="/#" className="hover:text-blue-500 transition">Terms of Service</a></li>
              </ul>
            </div>
  
            {/* Third Column end*/}
            <div>
              <h2 className="text-xl font-semibold  mb-4 text-black">Our Services</h2>
              <p className="text-[#212529]">We provide top-notch solutions for finding and managing coupon codes, helping you save money effortlessly. Discover deals, streamline your shopping, and unlock discounts with our reliable and user-friendly services.</p>
            </div>
          </div>
  
          {/* Footer Bottom */}
          <div className="mt-10 border-t border-gray-700 pt-6 text-center text-black">
            <p>© Copyright BD CouponCraze. All Rights Reserved</p>
            <p>Designed by <a href="https://github.com/arahman225" className="text-blue-500 hover:text-blue-600">Abdurrahman</a></p>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;