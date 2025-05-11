import { IoLogoInstagram } from "react-icons/io5";
import { FaFacebook } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";
import { PiTiktokLogoThin } from "react-icons/pi";

const Socials = () => {
  return (
    <>
        <div className="h-full bg-stone-300  flex flex-col text-center space-y-15 overflow-hidden justify-center" >
            <span className="text-3xl my-10"> Visit our social accounts! </span>
            <div className="flex flex-col space-y-9 items-center md:flex-row justify-center md:space-x-15 md:space-y-0">
              <span className="text-5xl md:text-7xl"><IoLogoInstagram /></span>
              <span className="text-5xl md:text-7xl"><FaFacebook /></span>
              <span className="text-5xl md:text-7xl"><RiTwitterXLine /></span>
              <span className="text-5xl md:text-7xl"><PiTiktokLogoThin /></span>
            </div>
        </div>


    </>
  );
};

export default Socials;
