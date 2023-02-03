'use client';

import styles from '../styles'
import {motion} from 'framer-motion'
import { slideIn, staggerContainer, textVariant } from '../utils/motion';
import { socials } from "../constants";


const Hero = () => (
  <section className={`${styles.yPaddings}  text-white sm:pl-16 pl-6`}>
    <motion.div
        variants={staggerContainer}
        initial='hidden'
        whileInView='show'
        viewport={{ once: false, amount: 0.25 }}
        className={` mx-auto flex flex-col`}
    >

          <div className='flex justify-center items-center flex-col 
          relative z-10'>

          

                <motion.h1 variants={textVariant(1.1)} className={styles.heroHeading}>
                    Metaverse
                </motion.h1>

                <motion.div className='flex items-center '>
                    <h1 className={styles.heroHeading} >Ma</h1>
                    <div className={`${styles.heroDText} border-purple-600`} />
                    <h1 className={styles.heroHeading}>Ness</h1>
                </motion.div>

          </div>

          <div className='hidden flex-col ml-auto pr-6 gap-10 xl:flex 
          xl:absolute xl:pr-12  right-0 top-32'>
            {socials.map((social) => (
              <img className='w-[20px] ' src={social.url} index={social.name} />
            ))}
          </div>
        
        

            <motion.div 
                variants={slideIn('right', 'tween', 0.2, 1)}
                className=' w-full'
            >
                {/* <div className="relative -z-20 -top-[160px] w-full h-[300px] hero-gradient rounded-tl-[140px] " /> */}

                <img
                    src='/cover.png'
                    alt='cover'
                    className='w-full  relative mr-0 pr-0 -top-[50px] md:h-[400px] lg:h-[500px] h-[200px] object-cover rounded-tl-[140px]  '
                  /> 

            {/* <a href="#explore">
          <div className="w-full flex justify-end sm:-mt-[70px] -mt-[50px] pr-[40px] relative z-10">
            <img
              src="/stamp.png"
              alt="stamp"
              className="sm:w-[155px] w-[100px] sm:h-[155px] h-[100px] object-contain"
            />
          </div>
        </a> */}
            </motion.div>
    </motion.div>
  </section>
);

export default Hero;
