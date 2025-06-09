import React from 'react'
import { ArrowDownIcon } from 'lucide-react'
import { motion } from 'framer-motion'
import { useTheme } from '../contexts/ThemeContext'
interface NextChapterProps {
  currentPage: number
  totalPages: number
  onNextChapter: () => void
}
export const NextChapter: React.FC<NextChapterProps> = ({
  currentPage,
  totalPages,
  onNextChapter,
}) => {
  const { theme } = useTheme()
  return (
    <motion.div
      className={`flex items-center transition-colors duration-300 ${theme === 'dark' ? 'text-white' : 'text-black'}`}
      initial={{
        opacity: 0,
        y: 20,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        delay: 0.8,
      }}
    >
      <div
        className={`text-sm ${theme === 'dark' ? 'opacity-50' : 'opacity-70'} mr-4`}
      >
        {currentPage < 10 ? `0${currentPage}` : currentPage}/
        {totalPages < 10 ? `0${totalPages}` : totalPages}
      </div>
      <motion.button
        onClick={onNextChapter}
        className="flex items-center font-bold"
        whileHover={{
          x: 4,
        }}
        transition={{
          duration: 0.2,
        }}
      >
        NEXT CHAPTER
        <motion.span
          className="ml-2"
          animate={{
            y: [0, 4, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 1.5,
          }}
        >
          <ArrowDownIcon size={16} />
        </motion.span>
      </motion.button>
    </motion.div>
  )
}
