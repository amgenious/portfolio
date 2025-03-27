'use client'
import { useState, useRef } from 'react'
import { Github, Linkedin, Mail, MessageCircle, Phone } from 'lucide-react';

export const ContactPage = () => {
    const formRef = useRef();
    const  [form, setForm] = useState({
      name:'',
      email:'',
      message:'',
    })
    const [loading, setLoading] = useState(false);
    const handleChange = (e) => {}
    const handleSubmit = (e) => {}

    return(
        <div className="h-fit bg-[#100d25]" id="contact">
            <div className=" p-20 flex justify-center items-center w-full  text-white">
                <div className='w-[700px]'>
        <p className="sm:text-[18px] text-[14px] text-[#aaa6c3] uppercase tracking-wider">
            Get in touch</p>
        <h3
        className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]"
        >Contact.</h3>
        {/* <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
            <label className='flex flex-col'>
              <span className='text-white font-medium mb-4'>Your Name</span>
              <input 
              type="text"
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              className='bg-[#151030] py-4 px-6 placeholder:text-[#aaa6c3]
              text-white rounded-lg outlined-none border-none font-medium
              '
              />
            </label>
            <label className='flex flex-col'>
              <span className='text-white font-medium mb-4'>Your Email</span>
              <input 
              type="email"
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email?"
              className='bg-[#151030] py-4 px-6 placeholder:text-[#aaa6c3]
              text-white rounded-lg outlined-none border-none font-medium
              '
              />
            </label>
            <label className='flex flex-col'>
              <span className='text-white font-medium mb-4'>Your Message</span>
              <textarea
              rows="7"
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder="What's do you want to say?"
              className='bg-[#151030] py-4 px-6 placeholder:text-[#aaa6c3]
              text-white rounded-lg outlined-none border-none font-medium
              '
              />
            </label>
            <button
            type='submit'
            className='bg-[#151030] py-3 px-8 outline-none w-fit text-white
            font-bold shadow-md shadow-primary rounded-xl
            '
            >
              {loading ? 'Sending...': 'Send'}

            </button>
        </form> */}
        <div className='p-5 w-full flex gap-5 flex-wrap'>
          <div className='flex gap-2'>
          <Mail />
          <a href='mailto:henrytweneboah956@gmail.com'> henrytweneboah956@gmail.com </a>
          </div>
          <div className='flex gap-2'>
          <Phone />
          <a>  
           +233 200039099
          </a>
          </div>
          <div className='flex gap-2'>
          <MessageCircle />
          <a>  
           +233 500164618
          </a>
          </div>
          <div className='flex gap-2'>
          <Linkedin />
          <a href='https://www.linkedin.com/in/henrytweneboah/'>  
           Henry Tweneboah
          </a>
          </div>
          <div className='flex gap-2'>
          <Github />
          <a href='https://github.com/amgenious'>
           Henry Tweneboah
          </a>  
          </div>
        </div>
    </div>

                    </div>
                </div>
  
    )
}