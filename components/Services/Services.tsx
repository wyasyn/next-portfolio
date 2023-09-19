"use client"
import './Services.scss'
import { GiMouse } from 'react-icons/gi'
import {BsPeopleFill, BsSearch } from 'react-icons/bs'
import {LuMonitorSmartphone } from 'react-icons/lu'
import {MdComputer } from 'react-icons/md'
import {BiRefresh } from 'react-icons/bi'
import { motion } from 'framer-motion'
import { HeadingSection, Service } from '..'

function Services() {
  const ServicesData = [
    {
      icon: <MdComputer />,
      title:'Development'
    },
    {
      icon: <LuMonitorSmartphone />,
      title:'Design'
    },
    {
      icon: <BsPeopleFill />,
      title:'Consultation'
    },
    {
      icon: <BsSearch />,
      title:'SEO'
    },
    {
      icon: <GiMouse />,
      title:'CMS'
    },
    {
      icon: <BiRefresh />,
      title:'Maintenance'
    },
  ]
  return (
    <div className="services">
      <HeadingSection
        title='What We Offer'
       />

       <motion.div 
       whileInView={{y: [50,0]}}
       transition={{ duration: 1, ease: 'easeInOut' }}
       className="service-content container">
        {
          ServicesData.map((item,index)=>(
            <Service
            key={index}
            {...item}
             />
          ))
        }
       </motion.div>
    </div>
  )
}

export default Services
