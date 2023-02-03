'use client';
import styles from "../styles";
import {footerVariants} from '../utils/motion'
import { motion } from "framer-motion";
import { socials } from "../constants";

const Footer = () => (
  <motion.footer
    variants={footerVariants}
    initial='hidden'
    whileInView='show'
    className={`${styles.xPaddings} py-8 relative text-white`}
  >
    <div className="footer-gradient" />
    <div className={`${styles.innerWidth} mx-auto flex flex-col gap-8`}>

        <div className="flex flex-col mb-16 gap-6 items-center md:flex-row md:justify-between">
          <h1 className="md:text-[60px] sm:text-[40px] text-[34px] "> <span className="text-purple-500 font-semibold">Enter</span> the Metaverse</h1>
          <div className="bg-[#25618B] hover:bg-purple-500 flex items-center justify-center h-fit p-4 rounded-3xl">
            <button className="flex  items-center gap-3">
                <img src="./headset.svg" alt="" />
                <p className="text-[12px] tracking-widest font-semibold lg:text-[16px] ">  ENTER METAVERSE</p>
            </button>
          </div>
        </div>
        <div className="h-[2px] mb-[30px] glassmorphism w-full " />
        <div className="flex flex-col md:flex-row md:justify-between items-center gap-6">
            <h5>METAVERSUS</h5>
            <p className="text-[10px] flex-grow-1">Copyright © 2021 - 2022 Metaversus. All rights reserved.</p>
            <div className="flex gap-4">
              {socials.map((social) => (
                <img src={social.url} index={social.name} />
              ))}
            </div>
        </div>
    </div>
  </motion.footer>
);

export default Footer;
