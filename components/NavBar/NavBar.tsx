"use client"
import Link from 'next/link'
import './NavBar.scss'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import {linkData} from '@/constants/data'
import { useTheme } from '../contexts/ThemeContext'
import { motion } from 'framer-motion'
import { RiMenu4Fill, RiCloseFill } from 'react-icons/ri'
import { usePathname } from 'next/navigation'

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

    const pathname = usePathname()

  return (
    <header className={theme}>
        <nav className={isVisible ? "nav-top " : "nav-top hidden"}>
            <div className="nav-container container flex">
                <button className='menu center' onClick={openMenu}>
                    <span className='hidden'>Menu</span>
                      <RiMenu4Fill />
                </button>
                <Link href='/' className='logo center' >
                  {
                    theme === 'dark' ?
                    <Image
                      src='/assets/logo-white-monkey.svg'
                      width={24}
                      height={32}
                      alt='logo'
                    /> 
                 :
                  <Image
                    src='/assets/logo-monkey.svg'
                    width={24}
                    height={32}
                    alt='logo'
                />
                  }
                </Link>
                <div className="right flex">
                    <ul className="desktop-nav flex">
                            {
                                linkData.map((link) => {
                                    const isActive = pathname === link.url
                                    return (
                                      <Link
                                        className={isActive ? 'nav-link active' : 'nav-link'}
                                        href={link.url}
                                        key={link.name}
                                      >
                                        {link.icon} {link.name}
                                      </Link>
                                    )
                                })
                            }
                    </ul>
                    <div className={`switch ${theme}`} onClick={toggleTheme}>
                    <motion.div className={`handle ${theme}`} layout transition={spring} />
                    </div>
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
