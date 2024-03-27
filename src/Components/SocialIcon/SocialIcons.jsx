// import React from 'react';
import { motion } from 'framer-motion'
import { FaFacebookF, FaGithub, FaLinkedinIn } from 'react-icons/fa6'
const SocialIcons = () => {
    const socialBtn = `flex flex-row justify-between items-center transition-all duration-500 border border-l-0 border-t-0 border-r-0 bg-primary rounded-none  cursor-pointer  text-white  hover:rounded-sm px-2.5 w-full py-[7.5px] text-xs `
    return (
        <div className="fixed top-[184px] z-20 md:top-[200px]">
            <div className="flex flex-col relative">
                <motion.div
                    initial={{ scale: 0, y: 50 }}
                    whileInView={{ scale: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <a className="absolute z-20 top-0 left-[-67px]   hover:-left-0.5 transition-all duration-500 w-[100px]" href="https://www.facebook.com/profile.php?id=100056107479254"> <button className={`${socialBtn}`}>Facebook<FaFacebookF className="text-sm"></FaFacebookF></button></a>
                </motion.div>
                <motion.div
                    initial={{ scale: 0, y: -50 }}
                    whileInView={{ scale: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <a className="absolute z-20 top-8 left-[-64px]  hover:-left-0.5 transition-all duration-500 w-[97px]" href="https://www.linkedin.com/in/junayet-alam/"><button className={`${socialBtn}`}>Linkedin<FaLinkedinIn className="text-sm"></FaLinkedinIn></button></a>
                </motion.div>
                <motion.div
                    initial={{ scale: 0, y: 50 }}
                    whileInView={{ scale: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <a className="absolute z-20 top-16 left-[-54px]  hover:-left-0.5 transition-all duration-500 w-[87px]" href="https://github.com/junayet4o12"><button className={`${socialBtn} border-b-0`}>Github<FaGithub className="text-sm"></FaGithub></button></a>
                </motion.div>
            </div>
        </div>
    );
};

export default SocialIcons;