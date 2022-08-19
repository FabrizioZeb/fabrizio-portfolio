import React, { useState } from 'react';
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { motion } from 'framer-motion';

import { images } from '../../constants';
import './Navbar.scss';


const Navbar = () => {

  const [toggle, setToggle] = useState(false);

  return (
    <nav className="app__navbar">
      <motion.div 
        whileInView={{x: [-200,0]}}
        transition={{duration: 0.5}}
        className="app__navbar-logo"
        >
        <h1 className="logo-text"><span className="logo-first">Fabrizio</span><span className="logo-second">Zeballos</span></h1>
      </motion.div>
      <ul className="app__navbar-links">
        {
          ['home', 'about', 'work', 'skills', 'testimonials', 'contact'].map((item) => (
            <li className="app__flex p_text" key={`link-${item}`}>
              <div />
              <a href={`#${item}`}>{item}</a>
            </li>
          ))
        }
      </ul>

      <div className="app__navbar-menu">
        <HiMenuAlt4 onClick={() => setToggle(!toggle)} />
        {
          toggle && (
            <motion.div
              whileInView={{ x: [0, -300] }}
              transition={{ duration: 0.7, ease: 'ease-out' }}
            >
              <HiX onClick={() => setToggle(false)} />
              <ul className="app__navbar-links">
              {
                ['home', 'about', 'work', 'skills', 'testimonials', 'contact'].map((item) => (
                  <li key={item}>
                    {/* <div /> */}
                    <a href={`#${item}`} onClick={() => setToggle(false)}>{item}</a>
                  </li>
                ))
              }
              </ul>
            </motion.div>
          )
        }
      </div>
    </nav>
  )
}

export default Navbar