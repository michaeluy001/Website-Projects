import { motion } from "framer-motion";
import { MdOutlineClose } from "react-icons/md";

const Drawer = (props) => {
  return (
    <>
      <div
        className="absolute top-0 left-0 bg-stone-500/50 w-screen h-screen "
        onClick={props.onToggle}
      />
  
      <motion.div
        className="absolute top-0 left-0 w-full md:w-1/3 bg-stone-800 h-screen 3 p-2 text-white overflow-hidden"
        initial={{ left: "-100%" }}
        animate={{ left: "0%" }}
        transition={{ duration: 0.3, stiffness: 100 }}
        exit={{ left: "-100%"}}
      >
        <span className="" onClick={props.onToggle}>
          <MdOutlineClose className="text-stone-300 text-4xl" />
        </span>
        <div className="mt-10 space-y-5">
          <div className="text-2xl mt-5"> Company </div>
          <ul className="list-disc space-y-5">
            <li>
              <a href="#"> About Us </a>{" "}
            </li>
            <li>
              <a href="#"> Blog </a>{" "}
            </li>
            <li>
              <a href="#"> Contact Us </a>{" "}
            </li>
            <li>
              <a href="#"> Socials </a>{" "}
            </li>
          </ul>
        </div>
      </motion.div>
  
    </>
  );
};

export default Drawer;
