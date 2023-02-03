'use client';

import styles from '../styles'
import {motion } from 'framer-motion'
import { staggerContainer, fadeIn, planetVariants } from "../utils/motion";
import { StartSteps, TitleText, TypingText } from "../components";
import { newFeatures } from '../constants'


const WhatsNew = () => (
  <section className={`${styles.paddings} lg:px-[15%]`}>
    <motion.div 
      variants={staggerContainer}
      initial='hidden' 
      whileInView='show' 
      viewport={{once: false, amount: 0.25 }} 
      className='flex gap-10 flex-col md:flex-row'>

        <motion.div variant={fadeIn('up', 'spring', 0.7, 1)}>

          <TypingText title='| Whats New?' textStyles=' ' />
          <h1 className='text-white lg:flex-[3] mb-10 font-semibold text-[37px] sm:text-[40px] md:text-[50px] capitalize'> <span className='text-purple-500'> What's new </span>about Metaversus?</h1>
          <div  className='flex'>
              {newFeatures.map((feature, index) => (
                <motion.div variant={fadeIn('down', 0.5, 1)} key={index} className='flex flex-col gap-4'>
                  <span className='p-4 w-fit object-contain rounded-2xl glassmorphism'><img src={feature.imgUrl} alt="" /></span>
                  <h4 className='text-white font-semibold'>{feature.title}</h4>
                  <p className='text-secondary-white w-[75%]'>{feature.subtitle}</p>
                </motion.div>
              ))}
          </div>

        </motion.div>

        <motion.div variants={planetVariants('right')}>
            <img src='./whats-new.png' alt='what-new'  />
        </motion.div>

    </motion.div>
  </section>
);

export default WhatsNew;
