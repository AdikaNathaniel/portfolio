/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { span } from 'framer-motion/client'
import React from 'react'
import MagicButton from './ui/MagicButton'
import { FaLocationArrow } from 'react-icons/fa6'
import { socialMedia } from '@/data'
import { string } from 'three/webgpu'

const Footer = () => {
  return (
    <footer className='w-full
    pb-10 mb-[100px] md:mb-5' id='contact'>
        <div className='flex flex-col items-center'>
            <h1 className='heading lg:max-w-[45vw]'>
              Ready To Take  { ' '} <span
        className='text-purple'>Your 
                Digital Presence { ' '} </span>To The Next Level?
            </h1>
            <p
              className='text-white-200 md:mt-10
              my-5 text-center '>
            Reach Out To Me Today And Let&apos;s Discuss How I 
            Can Help You Achieve Your Goals Today    
             </p>
              <a href='mailto:nathanieladikajnr@gmail.com'>
                     <MagicButton 
                       title="Let's get in touch"
                       icon={<FaLocationArrow />}
                       position='right'
                     />
             </a>
        </div>

        <div  className='flex mt-16 md:flex-row flex-col
         justify-between items-center'>
            <p
            className='md:text-base text-sm
            md:font-normal font-light'> Copyright © 2024 Nathaniel </p>


            <div  className='flex items-center md:gap-3
            gap-6'>
                {socialMedia.map((profile) => (
             <div key={profile.id}  className='w-10
             h-10 cursor-pointer flex justify-center
             items-center backdrop-filter
             backdrop-blur-lg saturate-180 bg-opacity-75
             bg-black-200 rounded-lg border
             border-black-300'>
            <img
              src={profile.img}
              alt={profile.id.toString()}
              width={20}
              height={20}/> 
                </div>
                ))}
            </div>
        </div>
    </footer>
  )
}

export default Footer
