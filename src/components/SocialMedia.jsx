import React from 'react';
import { BsYoutube, BsGithub} from 'react-icons/bs';
import { FaLinkedinIn } from 'react-icons/fa';



const SocialMedia = () => {
  return (
    <div className="app__social">
        <div>
            <BsYoutube />
        </div>
        <div>
            <BsGithub />
        </div>
        <div>
            <FaLinkedinIn />
        </div>
    </div>
  )
}

export default SocialMedia