import React from 'react'
import { motion } from 'framer-motion'
import { useTheme } from '../contexts/ThemeContext'
export const Logo: React.FC = () => {
  const { theme } = useTheme()
  return (
    <motion.div
      className={`relative font-sans font-black text-xl tracking-tight select-none`}
      whileHover={{
        scale: 1.02,
      }}
      transition={{
        duration: 0.2,
      }}
    >
      <motion.div
        className="relative inline-flex items-center"
        whileHover={{
          x: 2,
        }}
      >
        <span
          className={`
          bg-clip-text text-transparent 
          ${theme === 'dark' ? 'bg-gradient-to-r from-violet-400 to-violet-300' : 'bg-gradient-to-r from-gray-900 to-gray-700'}
        `}
        >
          YONG
        </span>
        <span
          className={`
          ml-0.5
          ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}
        `}
        >
          .DEV
        </span>
        <motion.div
          className={`
            absolute -bottom-1 left-0 h-[2px] rounded-full
            ${theme === 'dark' ? 'bg-gradient-to-r from-violet-400 to-violet-500 shadow-[0_0_12px_rgba(167,139,250,0.5)]' : 'bg-gradient-to-r from-gray-900 to-gray-700'}
          `}
          initial={{
            width: '0%',
          }}
          animate={{
            width: '100%',
          }}
          transition={{
            duration: 0.4,
            ease: 'easeOut',
          }}
        />
      </motion.div>
      <motion.div
        className={`
          absolute -inset-4 rounded-lg opacity-0 transition-opacity duration-300
          ${theme === 'dark' ? 'bg-violet-500/5' : 'bg-gray-900/5'}
        `}
        whileHover={{
          opacity: 1,
        }}
      />
    </motion.div>
  )
}
