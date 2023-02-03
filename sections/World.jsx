'use client';
import styles from "../styles";
import { staggerContainer } from "../utils/motion";
import { motion } from "framer-motion";
import { TitleText, TypingText } from "../components";
import { fadeIn } from "../utils/motion";

const World = () => (
  <section className={`${styles.paddings}`}>
    <motion.div
      variants={staggerContainer}
      initial='hidden'
      whileInView='show'
      viewport={{once: false, amount: 0.25}}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >

        <TypingText title='|People on Planet' textStyles='text-center mb-6' />
        {/* <TitleText  title='Track friends around you and invite them to play together in the same world' textStyles='text-center' /> */}
        <h1 className='text-white leading-tight md:leading-normal lg:flex-[3] mb-10 font-semibold text-[37px] sm:text-[40px] md:text-[50px] capitalize text-center'> <span className='text-purple-500'> Track friends </span>around you and invite them to <span className="text-purple-500"> play together</span> in the same world</h1>
        <motion.div
        variants={fadeIn('up', 'tween', 0.3, 1)}
        className="relative mt-[68px] flex "
      >
        <img src="/map.png" alt="map" className="w-full h-full object-cover" />

        <div className="absolute bottom-20 right-20 md:w-[70px] md:h-[70px] w-[40px] h-[40px] p-[6px] rounded-full bg-[#5D6680]">
          <img src="people-01.png" alt="people" className="w-full h-full" />
        </div>

        <div className="absolute md:top-10 md:left-20  left-5 w-[40px] h-[40px] md:w-[70px] md:h-[70px] p-[6px] rounded-full bg-[#5D6680]">
          <img src="/girl.png" alt="people" className="w-full h-full" />
        </div>

        <div className="absolute top-1/2 left-[45%] md:w-[70px] md:h-[70px] w-[40px] h-[40px] p-[6px] rounded-full bg-[#5D6680]">
          <img src="people-03.png" alt="people" className="w-full h-full" />
        </div>

        <div className="absolute top-0 left-[45%] md:w-[70px] md:h-[70px] w-[40px] h-[40px] p-[6px] rounded-full bg-[#5D6680]">
          <img src="people-03.png" alt="people" className="w-full h-full" />
        </div>
      </motion.div>

    </motion.div>
  </section>
);

export default World;
