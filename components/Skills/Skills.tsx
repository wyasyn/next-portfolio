"use client"
import './Skills.scss'
import { FaReact, FaGithub } from 'react-icons/fa'
import { GiPencilBrush } from 'react-icons/gi'
import { BsPaletteFill } from 'react-icons/bs'
import { motion } from 'framer-motion'
import { HeadingSection, Skill } from '..'

function Skills() {
  const Skillsdata =[
    {
      icon: <FaReact />,
      name:'React',
      overlay:'Interactivity and dynamic elements, DOM manipulation, event handling & AJAX'
    },
    {
      icon: <GiPencilBrush />,
      name:'Design',
      overlay:'Photoshop, Illustrator, Figma, Adobe XD and others'
    },
    {
      icon: <BsPaletteFill />,
      name:'Responsiveness',
      overlay:'Websites look and function well on various devices and screen sizes'
    },
    {
      icon: <FaGithub />,
      name:'Version Control',
      overlay:'collaborate with other developers, track changes, and manage code efficiently using Git & Github'
    },
  ]
  return (
   <div id="skills" className="skills">
      <HeadingSection
        title='What am good at!'
       />
       <motion.div
          whileInView={{ y:[50,0] }}
          transition={{ duration: 1, ease:'easeInOut' }}
        className="skills-content">
        {
          Skillsdata.map((item,index)=>(
            <Skill 
            key={index}
            {...item}
             />
          ))
        }
       </motion.div>
   </div>
  )
}

export default Skills
