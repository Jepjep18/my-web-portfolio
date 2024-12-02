import React from "react";
import { motion } from "framer-motion"; // Import framer-motion
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { styles } from "../styles"; // Ensure styles are imported
import { textVariant } from "../utils/motion"; // Import textVariant function

const Tech = () => {
  return (
    <div className="flex flex-col items-center">
      {/* Header Section with motion animation */}
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          Tools & Technologies
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Tech Stack.
        </h2>
      </motion.div>

      {/* Technology Icons Section */}
      <div className="flex flex-row flex-wrap justify-center gap-10 mt-8">
        {technologies.map((technology) => (
          <div 
            className="w-28 h-28 flex items-center justify-center transition-transform duration-300 transform hover:scale-110"
            key={technology.name}
          >
            <img 
              src={technology.icon} 
              alt={technology.name} 
              className="w-full h-full object-contain" 
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Tech, "");
