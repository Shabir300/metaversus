'use client';
import styles from "../styles";
import { motion } from "framer-motion";
import { InsightCard, TypingText } from "../components";
import { TitleText } from "../components";
import { staggerContainer } from "../utils/motion";
import { insights } from "../constants";

const Insights = () => (
  <section className={`${styles.paddings}`}>
    <motion.div
        variants={staggerContainer}
        initial='hidden'
        whileInView='show'
        viewport={{once: false, amount: 0.25}}
        className={`${styles.innerWidth} flex flex-col mx-auto`}
    >
      <TypingText title='| Insights' textStyles='text-center' />
      {/* <TitleText title='Insight about metaverse' textStyles='text-center' /> */}
      <h1 className='text-white lg:flex-[3] mb-10 font-semibold text-[37px] sm:text-[40px] md:text-[50px] capitalize text-center'> <span className='text-purple-500'> Insight </span>about metaverse</h1>
      <div className="flex flex-col gap-10 mt-16 lg:gap-14 xl:gap-16">
        {insights.map((insight, index) => (
          <InsightCard key={`insight-${index}`} {...insight} index={index + 1}  />
        ))}
      </div>
    </motion.div>
  </section>
);

export default Insights;
