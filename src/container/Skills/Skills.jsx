import React, { useState, useEffect } from 'react';
import { AiFillEye, AiFillGithub } from 'react-icons/ai';
import { motion } from 'framer-motion';
import ReactTooltip from 'react-tooltip';
import SkillBar from 'react-skillbars';

import { MotionWrap, AppWrap } from '../../wrapper';
import { urlFor, client } from '../../client';

import './Skills.scss';

const Skills = () => {

  const [experience, setExperience] = useState([]);
  const [education, setEducation] = useState([]);
  const [skills, setSkills] = useState([]);
  const [viewEducation, setViewEducation] = useState('Experience');
  const [active, setActive] = useState('Experience');


  useEffect(() => {
    const query = '*[_type == "experiences"]';
    const educationQuery = '*[_type == "education"]'
    const skillsQuery = '*[_type == "skills"]';

    client.fetch(query)
      .then((data) => {
        setExperience(data);
      });
    client.fetch(skillsQuery)
      .then((data) => {
        setSkills(data);
      });
    client.fetch(educationQuery)
      .then((data) => {
        setEducation(data);
      })
  }, []);


  const handleClick = (item) => {
      setActive(item);
      setViewEducation(item)
  }


  return (
    <div id='skills'>
      <h2 className="head-text">Skills & Experience</h2>
      <div className="app__skills-container">
        <div className="app-skills-container-tech">
          <motion.div
            className="app__skills-list "
          >
            {/* Skills by type here */}
            {['Language', 'Framework', 'Databases', 'Design'].map((item, index) => (
              <div
                key={index}
                className="app__skills-types app__flex"
              >
                <h2 className='bold-text'>{item}</h2>
                <div className="app__skills-item-row">
                  {skills?.map((skill) => (
                    skill.tags == item ? (
                      <motion.div
                        whileInView={{ opacity: [0, 1] }}
                        transition={{ duration: 0.5 }}
                        className="app__skills-item app__flex"
                        key={skill.name}
                      >
                        <div
                          className="app__flex"
                          style={{ backgroundColor: skill.bgColor }}
                        >
                          <img src={urlFor(skill.icon)} alt={skill.name} />
                        </div>

                        <p className="p-text">{skill.name}</p>

                      </motion.div>)
                      :
                      null))}
                </div>
              </div>
            ))}
            {/* Skills by type here */}

            {/* {skills?.map((skill) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="app__skills-item app__flex"
              key={skill.name}
            >
              <div
                className="app__flex"
                style={{ backgroundColor: skill.bgColor }}
              >
                <img src={urlFor(skill.icon)} alt={skill.name} />
              </div>

              <p className="p-text">{skill.name}</p>
              
            </motion.div>
          ))} */}


          </motion.div>
        </div>
        <div className="app-skills-container-works">
          <div className="change-view">
            {['Experience', 'Education'].map((item,index) => (
              <div 
                onClick={() => {handleClick(item) }}
                className={`${active === item ? 'item-active' : ''}`}
              >
              <h2>{item}</h2>
              </div>
            ))}

          </div>
          {viewEducation === 'Experience' ?
            <motion.div className='app__skills-exp'>
              {experience?.map((experience) => (
                <motion.div
                  className='app__skills-exp-item'
                  key={experience.year}
                >
                  <div className='app__skills-exp-year'>
                    <p className='p-text'>{experience.year}</p>
                  </div>

                  <motion.div className='app__skills-exp-work'>
                    {experience.works?.map((work) => (
                      <>
                        <motion.div
                          whileInView={{ opacity: [0, 1] }}
                          transition={{ duration: 0.5 }}
                          className="app__skills-exp-work"
                          data-tip
                          data-for={work.name}
                          key={work.name}
                        >
                          <h4 className="bold-text">{work.name}</h4>
                          <p className="p-text">{work.company}</p>
                        </motion.div>

                        <ReactTooltip
                          id={work.name}
                          effect="solid"
                          arrowColor="#141414"
                          backgroundColor="#fff"
                          textColor="#141414"
                          className="skills-tooltip"
                        >
                          {work.desc}
                        </ReactTooltip>
                      </>
                    ))}

                  </motion.div>
                </motion.div>
              ))}

            </motion.div>
            :
            <motion.div className='app__skills-exp'>
              {education?.map((education) => (
                <motion.div
                  className='app__skills-exp-item'
                  key={education?.degree}
                >
                  <div className='app__skills-exp-year'>
                    <p className='p-text start-year'>{education.yearstart}</p>
                    <p className='p-text finish-year'>{education.yearfinish}</p>
                  </div>
                  <motion.div
                    whileInView={{ opacity: [0, 1] }}
                    transition={{ duration: 0.5 }}
                    className="app__skills-exp-work"
                    data-tip
                    data-for={education.degree}
                    key={education.degree}
                  >
                    <h4 className="bold-text" style={{ color: 'var(--black-color)' }}>{education.degree}</h4>
                    <p className="p-text" style={{ color: 'var(--gray-color)' }}>{education.centre}</p>
                  </motion.div>


                </motion.div>
              ))}

            </motion.div>
          }
        </div>
      </div>
    </div>
  )
}

export default AppWrap(MotionWrap(Skills, 'app__skills'), 'skills');