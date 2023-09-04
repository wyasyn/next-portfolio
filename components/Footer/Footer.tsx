"use client"
import './Footer.scss'
import { useTheme } from '../contexts/ThemeContext'
import { socialsData } from '@/constants/data';
import { FaPaperPlane } from 'react-icons/fa';

export default function Footer() {
  const { theme } = useTheme();
  const currentDate = new Date().getFullYear()

  const sendEmail = (e: any) => {
    e.preventDefault();
      e.target.reset();
        alert("Thank You! your message has been received");
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
            <input className='msg' type="text" name="message" id="message" placeholder='Say hi!' />
            <button className='btn-form center' type='submit'> <span>send</span> <FaPaperPlane /> </button>
          </form>
          <p className="c-right">
            @{currentDate} Yasin Walum. All Rights Reserved.
          </p>
        </div>
    </footer>
  )
}
