import React from 'react';
import { BsYoutube, BsGithub} from 'react-icons/bs';
import { FaLinkedinIn } from 'react-icons/fa';



const SocialMedia = () => {
  return (
    <div className="app__social">
      <a href='https://github.com/FabrizioZeb'>
        <div>
            <BsGithub />
        </div>
      </a>
      <a href='https://www.linkedin.com/in/fabriziozeb/'>
        <div>
            <FaLinkedinIn />
        </div>
      </a>
    </div>
  )
}

export default SocialMedia