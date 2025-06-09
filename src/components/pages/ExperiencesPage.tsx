import React from 'react'
import { motion } from 'framer-motion'
import { useTheme } from '../../contexts/ThemeContext'
export const ExperiencesPage: React.FC = () => {
  const { theme } = useTheme()
  const experiences = [
    {
      period: '2022 – now',
      title: 'Freelance',
      role: 'Full stack web developer',
    },
    {
      period: '2025',
      title: 'COMPED (Thesis)',
      role: 'Full stack Developer',
    },
    {
      period: 'January – April 2025',
      title: 'Buko Labs (OJT)',
      role: 'Fullstack Developer',
    },
    {
      period: '2020 – now',
      title: 'Academic & Personal Projects',
      role: 'Fullstack Developer',
    },
  ]
  return (
    <div className="relative">
      <motion.h1
        className={`text-6xl font-bold mb-16 ${theme === 'dark' ? 'text-violet-400 drop-shadow-[0_0_25px_rgba(167,139,250,0.3)]' : ''}`}
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.5,
        }}
      >
        EXPERIENCES
      </motion.h1>
      <div className="relative">
        {/* Timeline line */}
        <div
          className={`absolute left-0 top-0 w-px h-full ${theme === 'dark' ? 'bg-violet-400/50 shadow-[0_0_15px_rgba(167,139,250,0.5)]' : 'bg-gray-200'}`}
        />
        {/* Experience items */}
        <div className="space-y-16">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="relative pl-8"
              initial={{
                opacity: 0,
                x: -20,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                delay: index * 0.2,
              }}
            >
              {/* Timeline dot */}
              <motion.div
                className={`absolute left-0 w-2 h-2 rounded-full -translate-x-[3px] ${theme === 'dark' ? 'bg-violet-400 shadow-[0_0_10px_rgba(167,139,250,0.8)]' : 'bg-black'}`}
                initial={{
                  scale: 0,
                }}
                animate={{
                  scale: 1,
                }}
                transition={{
                  delay: index * 0.2 + 0.2,
                }}
              />
              <motion.span
                className={`text-sm font-medium ${theme === 'dark' ? 'text-violet-300' : 'text-gray-500'}`}
              >
                {exp.period}
              </motion.span>
              <motion.h2
                className={`text-4xl font-bold mt-2 mb-1 ${theme === 'dark' ? 'text-violet-400 drop-shadow-[0_0_15px_rgba(167,139,250,0.3)]' : 'text-black'}`}
              >
                {exp.title}
              </motion.h2>
              <motion.p
                className={`text-lg ${theme === 'dark' ? 'text-violet-200' : 'text-gray-600'}`}
              >
                {exp.role}
              </motion.p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
