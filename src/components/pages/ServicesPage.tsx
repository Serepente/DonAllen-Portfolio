import React from 'react'
import { motion } from 'framer-motion'
import { useTheme } from '../../contexts/ThemeContext'
export const ServicesPage: React.FC = () => {
  const { theme } = useTheme()
  const services = [
    {
      number: '1',
      title: 'Backend Development',
      description:
        'Building robust and scalable server-side applications using Laravel, PHP, and SQL. Includes API development, database design, and security implementation.',
    },
    {
      number: '2',
      title: 'Fullstack Web Development',
      description:
        'Creating complete web applications with both backend and responsive frontend, ensuring seamless user experiences from end to end.',
    },
    {
      number: '3',
      title: 'Web App Deployment & Maintenance',
      description:
        'Deploying web apps to VPS or shared hosting, setting up domains and SSL, and providing ongoing maintenance, performance tuning, and security updates.',
    },
  ]
  return (
    <div className="w-full">
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
        MY SERVICES
      </motion.h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <motion.div
            key={service.number}
            className={`flex flex-col pb-8 border-b ${theme === 'dark' ? 'border-gray-700' : 'border-gray-400'}`}
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
              delay: index * 0.1,
            }}
          >
            <span
              className={`text-8xl font-bold mb-4 ${theme === 'dark' ? 'text-gray-700' : 'text-gray-200'}`}
            >
              #{service.number}
            </span>
            <h2
              className={`text-3xl font-bold mb-4 ${theme === 'dark' ? 'text-violet-400 drop-shadow-[0_0_15px_rgba(167,139,250,0.3)]' : ''}`}
            >
              {service.title}
            </h2>
            <p
              className={`text-lg ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}
            >
              {service.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
