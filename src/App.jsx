
import { useEffect, useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import SocialIcons from './Components/SocialIcon/SocialIcons'
import { motion } from 'framer-motion'
function App() {
  const [navbar, setNavbar] = useState(false)
  const changeBackground = () => {
    // console.log(window.scrollY)
    if (window.scrollY >= 250) {
      setNavbar(true)
    } else {
      setNavbar(false)
    }
  }
  useEffect(() => {
    changeBackground()
    window.addEventListener("scroll", changeBackground)
  })
  console.log(navbar);
  return (
    <div className='scroll-smooth font-league-spartan relative  bg-black'>
      <motion.div
        initial={{ y: -50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.7 }}
        className={`${navbar ? 'hidden' : 'block'}`}
        >
        <Navbar navbar={navbar} />
      </motion.div>
      <motion.div
        initial={{ y: -50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.7 }}
        className={`${navbar ? 'sticky top-0 block' : 'hidden'}`}>
        <Navbar navbar={navbar} />
      </motion.div>
      <section className='min-h-screen bg-black' id='Home'>Home</section>
      <section className='min-h-screen bg-green-500' id='About'>About</section>
      <section className='min-h-screen bg-gray-500' id='Services'>Services</section>
      <section className='min-h-screen bg-blue-500' id='Skills'>Skills</section>
      <section className='min-h-screen bg-purple-500' id='Projects'>Projects</section>
      <section className='min-h-screen bg-yellow-500' id='Timeline'>Timeline</section>
      <section className='min-h-screen bg-red-500' id='Testimonial'>Testimonial</section>
      <section className='min-h-screen bg-pink-500' id='Contact'>Contact</section>
      <SocialIcons />
    </div>
  )
}

export default App
