import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const BurgerCard = ({ heading, content, price, url }) => {

  const ref = useRef(null)
  const isView = useInView(ref, {once:true})
  return (
    <motion.div
    
    ref={ref}
    initial={{ opacity: 0, y: 50 }}
    animate={isView ? { opacity: 1, y: 0 } : {}}
    transition={{ duration: 1 }}

      className="w-full h-[150px] md:h-[200px] flex mb-3 md:mb-6"
    >
      <div className="w-2/3 md:py-6">
        <h1 className="font-bold ">{heading}</h1>
        <p className="text-sm text-justify pr-2 md:pr-8 text-[#B2A3B8] md:mt-2 md:mb-3">
          {content}
        </p>
        <button className="bg-[#382E3D] text-sm py-1 px-4 rounded-2xl mt-2">
          {price}
        </button>
      </div>

      <div className="w-1/3">
        <img
          className="w-full h-full object-cover rounded-xl"
          src={url}
          alt="Burger"
        />
      </div>
    </motion.div>
  );
};

export default BurgerCard;
