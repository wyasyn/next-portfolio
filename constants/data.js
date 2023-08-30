import {FaTwitter, FaGithub, FaLinkedinIn, FaFacebookF} from 'react-icons/fa'
import { AiOutlineHome, AiOutlineUser } from 'react-icons/ai'
import { BsBell, BsBriefcase } from 'react-icons/bs'
import { HiOutlineMail } from 'react-icons/hi'
export const linkData = [
    {
        url: '/',
        name: "Home",
        icon: <AiOutlineHome />,
    },
    {
        url: '/about',
        name: "About",
        icon: <AiOutlineUser />,
    },
    {
        url: '/portfolio',
        name: "Portfolio",
        icon: <BsBriefcase />,
    },
    {
        url: '/blog',
        name: "Blog",
        icon: <BsBell />,
    },
    {
        url: '/contact',
        name: "Contact",
        icon: <HiOutlineMail />,
    },
]

export const socialsData = [
    {
        icon: <FaFacebookF />,
        url: "https://www.facebook.com/ywalum",
    },
    {
        icon: <FaLinkedinIn />,
        url: "https://www.linkedin.com/in/yasin-walum-01b18295/",
    },
    {
        icon: <FaTwitter />,
        url: "https://twitter.com/wyasyn",
    },
    {
        icon: <FaGithub />,
        url: "https://github.com/wyasyn",
    },
]