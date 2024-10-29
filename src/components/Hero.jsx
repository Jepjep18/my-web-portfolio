import { motion } from "framer-motion";
import { useSpring, animated } from "react-spring"; // Import useSpring and animated from react-spring
import { styles } from "../styles";

const Hero = () => {
  // Create a spring animation for the text
  const textAnimation = useSpring({
    opacity: 1,
    from: { opacity: 0 }, // Start with opacity 0
    config: { duration: 1000 }, // Duration of the animation
  });

  return (
    <section className={`relative w-full h-screen mx-auto flex items-center justify-center`}>
      <div
        className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-col items-center justify-center`}
      >
        <div className='text-center'>
          {/* Apply the animated component to your text */}
          <animated.h1 style={textAnimation} className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className='text-[#915EFF]'>Jefferson</span>
          </animated.h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I'm a creative developer passionate about transforming complex ideas into elegant designs and seamless web applications that enhance user experiences.<br className='sm:block hidden' />
          </p>
        </div>
      </div>
      

      <div className='absolute bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
