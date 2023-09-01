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

export const FeaturedProjects = [
    {
        title:"RahStduio Portfolio",
        image:"/assets/project4.jpg",
        link:"https://rahstudio.netlify.app/",
        project: "website"
    },
    {
        title:"Loop Studio landing Page",
        image:"/assets/project3.jpg",
        link:"https://loopstudio256.netlify.app/",
        project: "website"
    },
    {
        title:"Blogr Landing Page",
        image:"/assets/project2.jpg",
        link:"https://blogr256.netlify.app/",
        project: "website"
    },
]

export const TestimonialData = [
    {
      name:'Joanitah Muki',
      photo: "/assets/profile2.jpg" ,
      title: 'CEO',
      comment: "He brought our vision to life with an incredible eye for design and attention to detail. Our website now looks and feels so much more engaging and user-friendly. We're thrilled with the results and highly recommend his services"
    },
    {
      name:'Cindy Newton',
      photo: "/assets/profile3.jpg" ,
      title: 'Executive Director',
      comment: "His expertise in front-end development is evident in the seamless navigation and beautiful layout he created for our site. He was prompt, responsive, and took the time to understand our needs. We couldn't be happier with the outcome!"
    },
    {
      name:'Petr Wahigton',
      photo: "/assets/profile4.jpg" ,
      title: 'Designer',
      comment: "Not only did he deliver a fantastic website, but they also made it responsive and optimized for all devices. Our website's performance has improved significantly, and we've received countless compliments from our users."
    },
    {
      name:'Mark Drury',
      photo: "/assets/profile5.jpg",
      title: 'Web Developer',
      comment: " He brought a fresh perspective to our project and exceeded our expectations in every way. We're already planning to collaborate with him again in the future."
    },
    {
      name:'Martini Xhaka',
      photo: "/assets/profile6.jpg" ,
      title: 'Accountant',
      comment: "We are incredibly satisfied with his work, and our website has received numerous compliments for its aesthetics and usability."
    },

  ]