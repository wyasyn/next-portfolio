import { ContactCardData } from '@/constants/data'
import { ContactCard } from '..'
import './Contact.scss'


const sendEmail = (e: any) => {
  e.preventDefault();

  e.target.reset();
  alert("Thank You! your message has been received");
}

export default function Contact() {
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
        <form className="form" onSubmit={sendEmail}  >
            <input 
            className='inputs'  
            type="text" 
            name="name" 
            id="name" 
            placeholder='Name'
            />
            <input  
            className='inputs'  
            type="email" 
            name="email" 
            id="email" 
            placeholder='Email' />

            <textarea
            className='inputs' 
            name="message" 
            id="message"
            placeholder='Message' ></textarea>
            <input className='btn btn-primary' type="submit" value="SEND MESSAGE" />
          </form>
        </div>
    </div>
  )
}
