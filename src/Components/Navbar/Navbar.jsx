import React, { useContext, useEffect, useState } from 'react';
import { FaSquareFacebook, FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { motion } from 'framer-motion'
import Sidebar from '../Sidebar/Sidebar';
import useParent from '../../hooks/useParent';
import { ParentContext } from '../../ParentSection/ParentSection';
const Navbar = ({navbar}) => {
    const { userData } = useContext(ParentContext);
    console.log(userData);
    const logos = [
        <p key={FaSquareFacebook} className='text-2xl font-bold text-blue-400'><FaSquareFacebook /></p>,
        <p key={FaSquareXTwitter} className='text-2xl font-bold text-white'><FaSquareXTwitter /></p>,
        <p key={FaLinkedin} className='text-2xl font-bold text-blue-400'><FaLinkedin /></p>,
        <p key={IoLogoYoutube} className='text-[26px] font-bold text-red-500'><IoLogoYoutube /></p>]
    
    return (
        <div>
            <div className={`navbar  text-white h-20 ${navbar ? 'bg-[#212121]' : 'bg-black'}`}>
                <div className="flex-none">
                    <Sidebar />
                </div>
                <div className="absolute box flex-1 text-2xl font-extrabold capitalize">
                    <div>{userData?.user?.about?.name}.</div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;