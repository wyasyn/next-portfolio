"use client"
import { ContactCardData } from '@/constants/data'
import { ContactCard } from '..'
import './Contact.scss'
import toast from 'react-hot-toast';
import { ChangeEvent, FormEvent, useState } from 'react';


export default function Contact() {
  const [data, setData] = useState({
    yourName: "",
    email: "",
    subject: "",
    message: "",
  });

    // Define a function to handle form input changes
    const handleInputChange = (e: any) => {
      const { name, value } = e.target;
      
      // Update the formData state with the new value
      setData({
        ...data,
        [name]: value,
      });
    };

  const sendEmail = async (e: FormEvent )=>{
    e.preventDefault();

    const response = await fetch('/api/send', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })

    if (response.status === 200){
      setData({
        yourName: "",
        email: "",
        subject: "",
        message: "",
      })
      toast.success(`Hi ${data.yourName}, your message was sent successfully!`)
    }
    else {
      toast.error('Sorry!, Your message has not been sent')
    }
  }
  return (
    <div className="contact-container container">
        <div className="col-1">
          {
            ContactCardData.map((data, index) => (
              <ContactCard
                key={index}
                {...data}
               />
            ))
          }
        </div>
        <div className="col-2">
            <h2>
              Say Something
            </h2>
        <form className="form" onSubmit={sendEmail}>

          <input  
            className='inputs'  
            type="text" 
            name="yourName"  // Change "name" to "yourName"
            id="name" 
            value={data.yourName}
            onChange={handleInputChange}
            placeholder='name' />

           <input  
            className='inputs'  
            type="email" 
            name="email" 
            id="email" 
            value={data.email}
            onChange={handleInputChange}
            placeholder='Email' />

            <input 
            className='inputs'  
            type="text" 
            name="subject" 
            id="subject" 
            value={data.subject}
            onChange={handleInputChange}
            placeholder='Subject'
            />

            <textarea
            className='inputs' 
            name="message" 
            id="message"
            value={data.message}
            onChange={handleInputChange}
            placeholder='Message' ></textarea>
            <input className='btn btn-primary' type="submit" value="SEND MESSAGE" />
          </form>
        </div>
    </div>
  )
}
