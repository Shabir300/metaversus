'use client';
import { MotionConfig } from "framer-motion";
import styles from "../styles";
import { staggerContainer } from "../utils/motion";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";
import { TypingText } from "../components";

const Feedback = () => (
  <section className={`${styles.paddings} `}>
    <motion.div 
      variants={staggerContainer}
      initial='hidden'
      whileInView='show'
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mt-20 flex mx-auto lg:h-[600px] gap-10 flex-col md:flex-row`}
    >
      <motion.div
        variants={fadeIn('right', 'tween', 0.2, 1)}
        className='flex-[1] lg:max-w-[370px] gradient-05
        rounded-[32px] border-[1px] relative border-[#646464]
        p-10 lg:pt-32 sm:p-8 pt-24 glassmorphism bg-transparent text-white'
      >
          <TypingText title='MUHAMMAD' textStyles=' text-2xl lg:text-[32px] tracking-widest lg:font-semibold ' />
          <p className="text-sm lg:pt-2 lg:text-[18px] text-secondary-white opacity-80">Founder | Metaversus</p>
          <p className="mt-10 leading-[190%] pr-3 lg:leading-[46px] lg:text-[20px] ">“With the development of today's technology, metaverse is very useful for today's work, or can be called web 3.0. by using metaverse you can use it as anything”</p>

      </motion.div>
      <motion.p 
        variants={fadeIn('right', 'tween', 0.2, 1)}
        className='flex flex-[0.7] overflow-hidden'
      >
        <img className="w-full outline-none object-cover h-full rounded-[32px]" src="./planet-09.png" alt="rocket" />
      </motion.p>
    </motion.div>
  </section>
);

export default Feedback;
