/* eslint-disable @next/next/no-img-element */
'use client'

import { projects } from '@/data'
import React from 'react'
import { FaLocationArrow } from 'react-icons/fa6'
import { motion } from 'framer-motion'

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.96 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: i * 0.08,
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
}

const RecentProjects = () => {
  return (
    <div className='py-20' id='projects'>
      <h1 className='heading'>
        A Small Selection Of{' '}
        <span className='text-purple'>Recent Projects</span>
      </h1>

      <div
        className='mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3
        gap-8 max-w-7xl mx-auto px-4'
      >
        {projects.map(({ id, title, des, img, iconLists, link }, i) => (
          <motion.div
            key={id}
            custom={i}
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, amount: 0.2 }}
            variants={cardVariants}
            whileHover={{ y: -10, transition: { duration: 0.25 } }}
            className='group relative flex flex-col overflow-hidden
            rounded-2xl border border-white/10 bg-[#10132E]
            shadow-lg h-[32rem]'
          >
            {/* Floating idle motion wrapper */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{
                duration: 4 + (i % 3),
                repeat: Infinity,
                ease: 'easeInOut',
                delay: i * 0.3,
              }}
              className='absolute inset-0 pointer-events-none'
              aria-hidden
            />

            {/* Always-on subtle pulsing glow */}
            <motion.div
              className='pointer-events-none absolute -inset-px rounded-2xl
              bg-[conic-gradient(from_90deg_at_50%_50%,#7c3aed_0%,#06b6d4_50%,#7c3aed_100%)]
              blur-md -z-10'
              animate={{
                opacity: [0.15, 0.35, 0.15],
                rotate: [0, 360],
              }}
              transition={{
                opacity: { duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: i * 0.2 },
                rotate: { duration: 18, repeat: Infinity, ease: 'linear' },
              }}
              aria-hidden
            />

            {/* Stronger glow on hover */}
            <div
              className='pointer-events-none absolute -inset-px rounded-2xl
              opacity-0 group-hover:opacity-100 transition-opacity duration-500
              bg-[conic-gradient(from_90deg_at_50%_50%,#a855f7_0%,#22d3ee_50%,#a855f7_100%)]
              blur-lg -z-10'
              aria-hidden
            />

            {/* Image area */}
            <div className='relative w-full h-52 overflow-hidden bg-[#0b0f24]'>
              <motion.img
                src={img}
                alt={title}
                className='w-full h-full object-cover'
                animate={{ scale: [1, 1.03, 1] }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: i * 0.4,
                }}
                whileHover={{ scale: 1.1 }}
              />
              {/* Continuous slow shimmer */}
              <motion.div
                className='pointer-events-none absolute inset-0
                bg-gradient-to-r from-transparent via-white/10 to-transparent'
                animate={{ x: ['-100%', '100%'] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  repeatDelay: 2 + i * 0.2,
                  ease: 'easeInOut',
                }}
                aria-hidden
              />
              {/* Faster sheen on hover */}
              <div
                className='pointer-events-none absolute inset-0
                -translate-x-full group-hover:translate-x-full
                transition-transform duration-1000 ease-out
                bg-gradient-to-r from-transparent via-white/25 to-transparent'
                aria-hidden
              />
            </div>

            {/* Body */}
            <div className='flex flex-col flex-1 p-6 relative z-10'>
              <motion.h2
                className='font-bold text-xl text-white line-clamp-1
                group-hover:text-purple transition-colors duration-300'
                animate={{ opacity: [0.95, 1, 0.95] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: i * 0.25,
                }}
              >
                {title}
              </motion.h2>

              <p className='mt-2 text-sm text-white/70 line-clamp-3'>
                {des}
              </p>

              <div className='flex items-center justify-between mt-auto pt-6'>
                <div className='flex items-center'>
                  {iconLists.map((icon, index) => (
                    <motion.div
                      key={icon}
                      animate={{ y: [0, -3, 0] }}
                      transition={{
                        duration: 2.4,
                        repeat: Infinity,
                        ease: 'easeInOut',
                        delay: index * 0.18 + i * 0.1,
                      }}
                      whileHover={{ y: -6, scale: 1.2 }}
                      className='border border-white/20 rounded-full
                      bg-black w-9 h-9 flex justify-center items-center'
                      style={{ transform: `translateX(-${5 * index * 2}px)` }}
                    >
                      <img src={icon} alt='tech' className='p-2' />
                    </motion.div>
                  ))}
                </div>

                <motion.a
                  href={link}
                  target='_blank'
                  rel='noopener noreferrer'
                  whileHover={{ x: 4 }}
                  transition={{ type: 'spring', stiffness: 400 }}
                  className='inline-flex items-center gap-2 text-sm
                  font-semibold text-purple hover:text-white
                  transition-colors duration-200'
                >
                  <motion.span
                    animate={{ opacity: [0.7, 1, 0.7] }}
                    transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                  >
                    View Project
                  </motion.span>
                  <motion.span
                    animate={{ x: [0, 4, 0] }}
                    transition={{
                      duration: 1.6,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                  >
                    <FaLocationArrow className='text-xs' />
                  </motion.span>
                </motion.a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default RecentProjects
