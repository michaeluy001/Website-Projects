import { motion } from "motion/react";
const Card = (props) => {
  return (
    <>
      <motion.div
        className="w-full overflow-hidden lg:flex lg:flex-col lg:items-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 2, delay: props.image.delay }}
      >
        <img
          src={props.image.src}
          alt={props.image.alt}
          className="size-full lg:size-100"
        ></img>
        <p className="text-stone-600 mb-10 mt-4 leading-10 tr text-2xl tracking-wider p-5">
          {props.image.desc}
        </p>
      </motion.div>
    </>
  );
};

export default Card;
