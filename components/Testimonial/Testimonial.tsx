"use client"
import { TestimonialData } from '@/constants/data';
import './Testimonial.scss'
import { useState } from 'react';
import { FaArrowLeft, FaArrowRight, FaCircle } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { HeadingSection, Testimony } from '..';

export default function Testimonial() {
    const [activeIndex, setActiveIndex] = useState(0);

    const updateIndex = (newIndex: number) => {
        if (newIndex < 0) {
          newIndex = 0;
        }
        else if (newIndex >= TestimonialData.length) {
          newIndex = TestimonialData.length - 1;
        }
        setActiveIndex(newIndex)
      }
  return (
    <div className="testimonial container">
        <HeadingSection
        title='What clients say about me!'
         />
        <div className="testimonial-container">
        <motion.div
          whileInView={{ y: [50,0] }}
          transition={{ duration: 1, ease: 'easeInOut' }}
         className="content" >
          {
            TestimonialData.map((data, index) => (
              <div 
              className={ index === activeIndex ? 'slide active' : 'slide' }
              key={index}>
                    { index === activeIndex && (
                  <Testimony
                  {...data}
                   />
                )
              }
              </div>
            ))
          }
        </motion.div>
        <div className="arrow-left" 
        onClick={()=>{
          updateIndex(activeIndex - 1)
        }}
        >
          <FaArrowLeft />
        </div>
        <div className="indicators">
          {
            TestimonialData.map((data,index) => (
              <div className={index===activeIndex? "test-btn active" : "test-btn"} key={index} 
              onClick={()=>{
                updateIndex(index)
              }}
              >
                <FaCircle />
              </div>
            ))
          }
        </div>
        <div className="arrow-right"
         onClick={()=>{
          updateIndex(activeIndex + 1)
        }}
        >
            <FaArrowRight />
        </div>
       </div>
    </div>
  )
}
