import { LuTwitter } from "react-icons/lu";
import { FaInstagram } from "react-icons/fa6";
import { CiFacebook } from "react-icons/ci";

const Footer = () => {
    return (
        <div className='mt-8 md:mt-16 text-[#B2A3B8]'>
            <div className='w-full cursor-pointer underline md:no-underline md:flex flex-cols-3 flex-1 md:text-xl '>
                <p className="md:hover:underline">Privacy Policy<span className="hidden md:inline-block md:mx-2"> | </span></p>
                <p className="md:hover:underline">Terms of Service<span className="hidden md:inline-block md:mx-2">|</span></p>
                <p className="md:hover:underline">Careers</p>
            </div>
            <div className="flex gap-5 my-3 text-xl md:justify-center md:items-center cursor-pointer md:text-3xl md:my-6">
                <LuTwitter className="hover:text-white" />
                <FaInstagram className="hover:text-white" />
                <CiFacebook className="hover:text-white" />
            </div>
            <div className="text-center"><p>@2025 Burger Bliss.All rights reserved.</p></div>
        </div>
    );
};

export default Footer;