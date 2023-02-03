'use client';

import styles from '../styles'
import {motion } from 'framer-motion'
import { staggerContainer, fadeIn, planetVariants } from "../utils/motion";
import { StartSteps, TitleText, TypingText } from "../components";
import { startingFeatures } from '../constants'


const GetStarted = () => (
  <section className={`${styles.paddings} lg:px-[10%]`}>
    <motion.div
        variants={staggerContainer}
        initial='hidden'
        whileInView='show'
        viewport={{once: false}}
        className='flex gap-10  flex-col md:flex-row text-secondary-white '
    >
        <motion.div 
          variants={planetVariants('left')}
          className='flex-1 m-0'
        >
          <img className='md:w-[460px] m-0' src="./get-started.png" alt="getting started" />
        </motion.div>
        <motion.div variants={fadeIn('down', 0.5, 1)} className='flex-1'>
            <TypingText title='|  How Metaverus work' />
            <h1 className='text-white lg:flex-[3] mb-10 font-semibold text-[37px] sm:text-[40px] md:text-[50px] capitalize'> <span className='text-purple-500'> Get started </span> with just a few clicks</h1>
            {startingFeatures.map((feature, index) => (
             
              <motion.div key={index} className='flex m-6 gap-5' variants={fadeIn('right', 'spring', index * 0.5, 1)}>
                <div className='flex gap-4 items-center'>
                  <span className='p-3 font-semibold text-white glassmorphism rounded-2xl'>{`0${index + 1}`}</span>
                  <span>{feature}</span>
                </div>
              </motion.div>
            ))}
        </motion.div>
    </motion.div>
  </section>
);

export default GetStarted;
