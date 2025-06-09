import React from 'react'
import { useTheme } from '../contexts/ThemeContext'
import { SunIcon, MoonIcon } from 'lucide-react'
import { motion } from 'framer-motion'
export const ThemeSelector: React.FC = () => {
  const { theme, toggleTheme } = useTheme()
  return (
    <motion.button
      onClick={toggleTheme}
      className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-colors duration-300 ${theme === 'dark' ? 'bg-gray-800 text-white hover:bg-gray-700' : 'bg-white text-gray-900 hover:bg-gray-100'}`}
      whileHover={{
        scale: 1.05,
      }}
      whileTap={{
        scale: 0.95,
      }}
    >
      <motion.div
        initial={false}
        animate={{
          rotate: theme === 'dark' ? 180 : 0,
        }}
        transition={{
          duration: 0.3,
        }}
      >
        {theme === 'dark' ? <MoonIcon size={18} /> : <SunIcon size={18} />}
      </motion.div>
      <span className="text-sm font-medium">
        {theme === 'dark' ? 'Dark' : 'Light'} Mode
      </span>
    </motion.button>
  )
}
