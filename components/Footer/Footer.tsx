"use client"
import './Footer.scss'
import { useTheme } from '../contexts/ThemeContext'
import { socialsData } from '@/constants/data';
import { FaPaperPlane } from 'react-icons/fa';
import { useState } from 'react';
import toast from 'react-hot-toast';

export default function Footer() {
  const { theme } = useTheme();
  const currentDate = new Date().getFullYear()

  const [data, setData] = useState({
    message: "",
  })

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  }

  const sendEmail = async (e:any) => {
    e.preventDefault();

    const response = await fetch('/api/footer', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })

    if (response.status === 200){
      setData({
        message: "",
      })
      toast.success(`Hi, your message was sent successfully!`)
    } else {
      toast.error('Sorry, your message has not been sent')
    }
  }


  return (
    <footer className={`footer ${theme}`}>
        <div className="footer-container container">
          <div className="socials flex">
                {
                  socialsData.map((data, index) => (
                    <a href={data.url} className='social-icon center' key={index}>
                        {data.icon}
                    </a>
                  ))
                }
          </div>
          <form className="form" onSubmit={sendEmail}>
            <label htmlFor="message" className='label'>hi</label>
            <input
             className='msg'
              type="text" 
              name="message"
               id="message" 
               onChange={handleChange}
               value={data.message}
               placeholder='Say hi!'
                />
            <button className='btn-form center' onSubmit={sendEmail} type='submit'> <span>send</span> <FaPaperPlane /> </button>
          </form>
          <p className="c-right">
            @{currentDate} Yasin Walum. All Rights Reserved.
          </p>
        </div>
    </footer>
  )
}
