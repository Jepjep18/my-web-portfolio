import React from "react"; // Add this import statement

import { motion } from "framer-motion";

import { styles } from "../styles";

const textVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 20 },
};

const Hero = () => {
  const texts = [
    "Jefferson Arnado",
    "Front End Developer",
    "Back End Developer",
  ];
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 2000); // Change text every 2 seconds
    return () => clearInterval(interval);
  }, [texts.length]);

  return (
    <section
      className={`relative w-full h-screen mx-auto flex items-center justify-center`}
    >
      <div
        className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-col items-center justify-center`} // Added justify-center to vertically center content
      >
        <div className="text-center">
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I&apos;m{" "}
            <span className="text-[#915EFF]">
              <motion.span
                variants={textVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                transition={{ duration: 0.5 }}
              >
                {texts[index]}
              </motion.span>
            </span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I&apos;m a creative developer passionate about transforming complex
            ideas into elegant designs and seamless web applications that
            enhance user experiences.
            <br className="sm:block hidden" />
          </p>
        </div>
      </div>

      <div className="absolute bottom-32 w-full flex justify-center items-center">
        {" "}
        {/* Removed xs:bottom-10 to ensure it's centered */}
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
