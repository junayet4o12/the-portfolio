// import React from 'react';

import { useEffect, useState } from "react";
import useParent from "../../hooks/useParent";

const Links = () => {
    const { userData } = useParent()
    const [activeSection, setActiveSection] = useState('Home');

    const links = [
        'Home',
        'About',
        'Services',
        'Skills',
        'Projects',
        'Timeline',
        'Testimonial',
        'Contact',
    ]
    const handleScroll = () => {
        const HomeOffset = document.getElementById('Home').offsetTop;
        const AboutOffset = document.getElementById('About').offsetTop;
        const ServicesOffset = document.getElementById('Services').offsetTop;
        const SkillsOffset = document.getElementById('Skills').offsetTop;
        const ProjectsOffset = document.getElementById('Projects').offsetTop;
        const TimelineOffset = document.getElementById('Timeline').offsetTop;
        const TestimonialOffset = document.getElementById('Testimonial').offsetTop;
        const ContactOffset = document.getElementById('Contact').offsetTop;
        const scrollPosition = window.scrollY;

        if (scrollPosition < AboutOffset) {
            setActiveSection('Home');
        } else if (scrollPosition >= AboutOffset && scrollPosition < ServicesOffset) {
            setActiveSection('About');
        } else if (scrollPosition >= ServicesOffset && scrollPosition < SkillsOffset) {
            setActiveSection('Services');
        } else if (scrollPosition >= SkillsOffset && scrollPosition < ProjectsOffset) {
            setActiveSection('Skills');
        } else if (scrollPosition >= ProjectsOffset && scrollPosition < TimelineOffset) {
            setActiveSection('Projects');
        } else if (scrollPosition >= TimelineOffset && scrollPosition < TestimonialOffset) {
            setActiveSection('Timeline');
        } else if (scrollPosition >= TestimonialOffset && scrollPosition < ContactOffset) {
            setActiveSection('Testimonial');
        } else {
            setActiveSection('Contact');
        }
        console.log(HomeOffset, AboutOffset, ServicesOffset, SkillsOffset, ProjectsOffset, TimelineOffset, TestimonialOffset, ContactOffset, scrollPosition, activeSection);
    };
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [handleScroll]);

    const scrollToSection = (section) => {
        const sectionOffset = document.getElementById(section).offsetTop;
        const distance = Math.abs(window.scrollY - sectionOffset);

        const duration = Math.min(1500, distance * 0.5);
        setTimeout(() => {
            window.scrollTo({ top: sectionOffset, behavior: 'smooth', duration });
        }, 300);

    };
    return (
        <div className="flex flex-col justify-center items-center gap-3 w-full h-full bg-white">

            {
                links.map(link => <a onClick={() => scrollToSection(link)} className={` flex justify-end items-center w-[190px] h-11 px-1 py-1 transition-all duration-300 text-xl  cursor-pointer hover:bg-black/15 hover:border-l-[4px] hover:border-black/50 ${activeSection === link ? 'text-primary font-bold bg-black/15 border-l-[4px] border-primary' : 'text-black font-bold'} ml-auto pr-10`} key={link}>{link}</a>)
            }
            <p className={`flex justify-end items-center w-full h-11 px-1 py-1 transition-all duration-300 text-2xl  hover:bg-black/15 hover:border-l-[4px] hover:border-black/50 text-secondary font-bold bg-black/15 border-l-[4px] border-secondary cursor-default uppercase ml-auto pr-10`}>
                {
                    userData?.user?.about?.name
                }
            </p>
        </div>
    );
};

export default Links;