import React from 'react'
import { motion } from 'framer-motion'
import { useTheme } from '../../contexts/ThemeContext'
export const SkillsPage: React.FC = () => {
  const { theme } = useTheme()
  const skills = [
    {
      name: 'HTML',
      level: 100,
    },
    {
      name: 'CSS',
      level: 90,
    },
    {
      name: 'LARAVEL',
      level: 85,
    },
    {
      name: 'JavaScript ',
      level: 75,
    },
    {
      name: 'MYSQL',
      level: 80,
    },
    {
      name: 'Tailwind CSS / Bootstrap',
      level: 85,
    },
    {
      name: 'PYTHON',
      level: 65,
    },
    {
      name: 'BASIC REACT',
      level: 55,
    },
    {
      name: 'cPanel / VPS Hosting',
      level: 75,
    },
    {
      name: 'jQuery',
      level: 70,
    },
    {
      name: 'C/C++ (Embedded)',
      level: 85,
    },
    {
      name: 'IoT Communication (MQTT, HTTP)',
      level: 70,
    },
  ]
  return (
    <div>
      <motion.h1
        className={`text-6xl font-black tracking-tight mb-12 ${theme === 'dark' ? 'text-violet-400' : ''}`}
        initial={{
          y: -20,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          duration: 0.5,
        }}
      >
        SKILLS
      </motion.h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            initial={{
              x: -20,
              opacity: 0,
            }}
            animate={{
              x: 0,
              opacity: 1,
            }}
            transition={{
              delay: index * 0.1,
            }}
          >
            <div
              className={`font-medium uppercase mb-2 ${theme === 'dark' ? 'text-violet-300' : ''}`}
            >
              {skill.name}
            </div>
            <div
              className={`relative h-1 w-full ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-300'}`}
            >
              <motion.div
                className={`absolute top-0 left-0 h-1 ${theme === 'dark' ? 'bg-violet-500 shadow-[0_0_10px_rgba(139,92,246,0.5)]' : 'bg-black'}`}
                initial={{
                  width: 0,
                }}
                animate={{
                  width: `${skill.level}%`,
                }}
                transition={{
                  delay: 0.5 + index * 0.1,
                  duration: 0.8,
                  ease: 'easeOut',
                }}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
