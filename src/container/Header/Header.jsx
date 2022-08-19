import React, {useState} from 'react';
import {motion} from 'framer-motion';
import './Header.scss';

import {AppWrap} from '../../wrapper';
import { images } from '../../constants';

const Header = () => {

  const scaleVariants = {
      whileInView: {
        scale: [0,1],
        opacity: [0,1],
        transitionn: {
          duration: 1,
          ease: 'easeInOut'
        }
      }
  }

  const headerIcon = [
    {
      text: 'Fabrizio',
      desc: 'Hello I am',
      span: <span>🌱</span>
    },
    {
      text: 'Github',
      desc: 'Go to my',
      span: <span>🌱</span>
      // span: <span><img src={images.github} alt="Github"/></span>
    }
    
  ];

  const [face, setFace] = useState(headerIcon[0]);


  return (
    <div className="app__header app__flex">
        <motion.div
          whileInView={{x : [-100, 0], opacity: [0,1]}}
          transition={{duration: 1}}
          className="app__header-info"
        >
          <div className="app__header-badge" >
            <a className="badge-git"href="https://github.com/FabrizioZeb" target="_blank" rel="noreferrer">
            <div className="badge-cmp app__flex" onMouseEnter={()=>(setFace(headerIcon[1]))} onMouseLeave={()=>(setFace(headerIcon[0]))}>
              <div>
              {face.span}
              </div>
              <div style={{marginLeft: 20}}>
                <p className="p-text transition-dur" style={{color: 'var(--gray-color)', opacity: [0,1]}}>{face.desc}</p>
                <h1 className='head-text transition-dur' style={{color: 'var(--black-color)', opacity: [0,1]}}>{face.text}</h1>
              </div>
               
            </div>
            </a>
            <div className="tag-cmp app__flex">
              <p className="p-text" style={{color: 'var(--gray-color)'}}>Fullstack</p>
              <p className="p-text" style={{color: 'var(--gray-color)'}}>Developer</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          whileInView={{ opacity: [0,1]}}
          transition={{duration: 0.5, delayChildren: 0.5}}
          className="app__header-img"
        >
          <img src={images.profile} alt="profile_bg"/>
          
          <motion.img
            whileInView={{ scale: [0,1]}}
            transition={{duration: 0.8, ease: 'easeInOut'}}
            src={images.circle}
            alt="profile-circle"
            className="overlay_circle"
          />
          <div/>
          {/* <div className="app__header-separation"></div> */}
        </motion.div>
        
        <motion.div
          variants={scaleVariants}
          whileInView={scaleVariants.whileInView}
          className="app__header-circles"
        >
          {[images.react, images.javasvg, images.cpp].map((circle,index) => (
            <div className="circle-cmp app__flex" key={`circle-index`}>
              <img src={circle} alt="circle"/>
            </div>
          ))}
        </motion.div>
        
    </div>
    
  )
}

export default AppWrap(Header, 'home') 