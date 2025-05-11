import { GiHamburgerMenu } from "react-icons/gi";
import { IoSearchOutline } from "react-icons/io5";
import { useState } from "react";
import Drawer from "./Drawer";

const Header = () => {
  const [isOpened, setIsOpened] = useState(false);

  const toggleDrawer = () => {
    setIsOpened(prev => !prev);
  };

  return (
    <>
      <div className="bg-stone-300 h-20 w-full text-center content-center text-stone-800 fixed top:0 left:0 lg:h-30 z-1">
        <div className="w-full h-full grid grid-cols-3">
          <span className="justify-items-center content-center ">
  
            <GiHamburgerMenu
              className="text-2xl md:text-4xl"
              onClick={toggleDrawer}
            />
            {isOpened && <Drawer onToggle={toggleDrawer}/> }
          </span>
          <span className="justify-items-center m-auto text-center">
            <img
              src="/assets/kapehan_logo.png"
              alt="kapehan logo"
              className="size-full md:size-1/2"
            >
          
            </img>
          </span>
          <span className="justify-items-center  content-center ">
     
            <IoSearchOutline className="text-2xl md:text-4xl" />
          </span>
        </div>
      </div>
      
    </>
  );
};

export default Header;
