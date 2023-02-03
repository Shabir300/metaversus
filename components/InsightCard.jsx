'use client';
import styles from "../styles";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";

const InsightCard = ({index, imgUrl, title, subtitle }) => (
  <motion.div 
    variants={fadeIn('up', 'spring', index * 0.5, 1)}
    className='flex md:flex-row flex-col gap-6 lg:gap-16 xs:gap-20 justify-between items-center'
  >
    <img className="md:w-[200px] w-[170px] object-cover md:h-[170px] h-[130px]
     lg:w-[230px] lg:h-[200px] xl:w-[260px] xl:h-[230px] rounded-3xl"
      src={imgUrl} alt={`insight Image-${index}`} />

    <div className="flex items-center -mx-12 gap-4 flex-1">
      <div className="flex flex-col mx-auto justify-between flex-[0.8] gap-3 lg:gap-8 xs:gap-12">
        <h2 className="text-white text-center md:text-left text-3xl lg:text-[42px] ">{title}</h2>
        <p className="text-secondary-white text-center md:text-left opacity-70">{subtitle}</p>
      </div>
      <div className="hidden glassmorphism md:flex border-[1px] p-4 lg:p-6 rounded-full">
        <a><img src="./arrow.svg" alt="link-arrow" /></a>
      </div>
    </div>
  </motion.div>
);

export default InsightCard;
