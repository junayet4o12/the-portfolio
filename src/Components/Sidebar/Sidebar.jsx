import React, { useState } from 'react';
import ToggleBtn from './ToggleBtn';
import Links from './Links';
import { motion } from 'framer-motion'
import useParent from '../../hooks/useParent';
const Sidebar = () => {
    const {setOpen,open} = useParent()
    
    const variants = {
        open: {
            clipPath: "circle(1200px at 50px 50px)",
            transition: {
                type: "spring",
                stiffness: 20
            }
        },
        closed: {
            clipPath: "circle(25px at 80px 40px)",
            transition: {
                delay: 0.2,
                type: "spring",
                stiffness: 400,
                damping: 40
            }
        }
    }
    return (
        <motion.div
            animate={open ? "open" : "closed"}
            className='relative flex flex-col justify-center bg-white text-black'>
            <motion.div
                variants={variants}
                className='fixed top-0 left-0 w-[300px] bg-white h-screen'>
                <Links />
            </motion.div>
            <ToggleBtn setOpen={setOpen} />
        </motion.div>
    );
};

export default Sidebar;