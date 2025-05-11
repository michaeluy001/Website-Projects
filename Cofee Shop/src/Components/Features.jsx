import { useState, useEffect } from "react";
import Card from "./Card";
import { motion } from "motion/react";
import coffeeCup from '/assets/coffee.jpg'
import coffeebeans from '/assets/coffee_beans.jpg'
import cozy from '/assets/cozy.jpg'


const Features = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    setImages([
      {
        src: coffeeCup,
        alt: "coffee cup",
        desc: "Step into our cozy coffee haven, where every sip feels like a warm hug. Plush corners, soft lighting, and the aroma of freshly brewed coffee await you.",
        delay: 0.75
      },
      {
        src: coffeebeans,
        alt: "coffee beans",
        desc: "Indulge in the rich flavors of our carefully selected, high-quality coffee beans. Freshly roasted to perfection, every bean tells a story of passion and dedication to the art of coffee-making.",
        delay: 1
      },
      {
        src: cozy,
        alt: "cozy coffee shop",
        desc: "Cozy up in our inviting coffee shop, where warm lighting and rich aromas envelop you in comfort. Savor every sip of our expertly crafted coffee, made with love and the finest beans.",
        delay: 1.5
      },
    ]);
  }, []);

  return (
    <>
      <div className="bg-stone-800 justify-items-center flex flex-col text-center ">
        <div className="w-full h-screen text-center mt-10  content-center">
          <motion.span
            className="text-center text-stone-300 font-bold text-3xl italic md:text-5xl"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 1, duration: 2 }}
            
          >
            There are many reasons to fall in love with us...
          </motion.span>
        </div>
        <div className="w-full relative overflow-hidden flex flex-col p-auto justify-evenly mt-10 lg:w-full lg:flex-row space-x-2">
          {images.map((item, index) => (
            <Card key={index} image={item}/>
          ))}
        </div>
      </div>
    </>
  );
};

export default Features;
