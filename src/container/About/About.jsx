import React, {useState, useEffect} from 'react';
import { motion, transform } from 'framer-motion';
import { images } from '../../constants';


import './About.scss'
import {MotionWrap, AppWrap} from '../../wrapper';
import {urlFor, client} from '../../client';


const About = () => {


  const [abouts, setAbouts] = useState([]);

  useEffect(() => {
    const query = '*[_type == "abouts"]';

    client.fetch(query)
      .then((data) => {setAbouts(data)})

  }, []);

  return (
    <div>
      <h2 className="head-text" style={{color: 'white'}}> Something <span style={{ color: "#A882DD"}}> About </span><br/> My <span style={{color: "#A882DD"}}>Strenghts</span>
      </h2>

      <div className="app__profiles">
        {abouts.map((about,index) => (
          <motion.div
            whileInView={{opacity: 1}}
            whileHover={{scale:1.05}}
            transition={{duration: 0.1, type: 'tween'}}
            className="app__profiles-item"
            key={about.title + index}
          >
            <div>
              <img src={urlFor(about.imgUrl)} alt={about.title}/>
            </div>
            
            <h2 className="bold-text" style={{marginTop: 20}}>{about.title}</h2>
            <p className="p-text" style={{fontSize: '18px', marginTop: 10}}>{about.description}</p>

          </motion.div>
          
        ))}
      </div>
    </div>
  )
}

export default AppWrap(
  MotionWrap(About, 'app__about'),
  'about',
  "app__primarybg"
);