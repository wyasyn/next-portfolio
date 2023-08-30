"use client"
import Link from 'next/link'
import './NavBar.scss'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import {linkData} from '@/constants/data'
import { useTheme } from '../contexts/ThemeContext'
import { motion } from 'framer-motion'
import { RiMenu4Fill, RiCloseFill } from 'react-icons/ri'

export default function NavBar() {

    const [menu, setMenu] = useState(false)
    const openMenu = () => {
        setMenu(true)
    }
    const closeMenu = () => {
        setMenu(false)
    }
    
    useEffect(() => {
        // This code will only run after the component has mounted
        // and the browser environment is available
        if (menu) {
          document.body.style.overflow = "hidden";
        } else {
          document.body.style.overflow = "auto";
        }
      }, [menu]);

    const [isVisible, setIsVisible] = useState(true);
    if (typeof window !== 'undefined') {
        const [prevScrollY, setPrevScrollY] = useState(window.scrollY);

        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            setIsVisible(prevScrollY > currentScrollY);
            setPrevScrollY(currentScrollY);
          };
        
          useEffect(() => {
            window.addEventListener('scroll', handleScroll);
            return () => {
              window.removeEventListener('scroll', handleScroll);
            };
          }, [prevScrollY]);
    }

    const spring = {
        type: "spring",
        stiffness: 700,
        damping: 30
      };


    const { theme, toggleTheme } = useTheme();

  return (
    <header className={theme}>
        <nav className={isVisible ? "nav-top " : "nav-top hidden"}>
            <div className="nav-container container flex">
                <Link href='/' className='logo center' >
                    <Image
                        src='/assets/logoshade.svg'
                        width={24}
                        height={32}
                        alt='logo'
                        loading='lazy'
                     />
                </Link>
                <div className="right flex">
                    <ul className="desktop-nav flex">
                            {
                                linkData.map((item, index) => (
                                    <li key={index} >
                                        <Link href={item.url} className='nav-link'>
                                            {item.name}
                                        </Link>
                                    </li>
                                ))
                            }
                    </ul>
                    <div className={`switch ${theme}`} onClick={toggleTheme}>
                    <motion.div className={`handle ${theme}`} layout transition={spring} />
                    </div>
                    <button className='menu center' onClick={openMenu}>
                        <span className='hidden'>Menu</span>
                            <RiMenu4Fill />
                    </button>
                </div>
            </div>
        </nav>
        {
            menu && (
                <nav className="mobile-nav-list">
                    <div className="close flex container">
                        <div className="icon center" onClick={closeMenu}>
                            <RiCloseFill />
                        </div>
                    </div>
                    <ul className="nav-list container flex">
                        {
                            linkData.map((item, index) => (
                                <li key={index} onClick={closeMenu}>
                                    <Link href={item.url} className='nav-link flex'>
                                        {item.icon} {item.name}
                                    </Link>
                                </li>
                            ))
                        }
                    </ul>
                </nav>
            )
        }
    </header>
  )
}
