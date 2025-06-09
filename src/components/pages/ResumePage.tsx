import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { DownloadIcon, CheckIcon } from 'lucide-react'
import { useTheme } from '../../contexts/ThemeContext'
export const ResumePage: React.FC = () => {
  const { theme } = useTheme()
  const [downloading, setDownloading] = useState(false)
  const [downloaded, setDownloaded] = useState(false)
  const handleDownload = () => {
    setDownloading(true)
    const pdfUrl = '/resume/DonAllenVeloso.pdf'
    const link = document.createElement('a')
    link.href = pdfUrl
    link.download = 'DonAllenVeloso_Resume.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    setTimeout(() => {
      setDownloading(false)
      setDownloaded(true)
      setTimeout(() => setDownloaded(false), 2000)
    }, 1000)
  }
  return (
    <div className="relative">
      <motion.h1
        className={`text-6xl font-bold mb-8 ${theme === 'dark' ? 'text-violet-400 drop-shadow-[0_0_25px_rgba(167,139,250,0.3)]' : ''}`}
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
        RESUME
      </motion.h1>
      <div className="max-w-2xl">
        <p
          className={`text-lg mb-8 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}
        >
          Download my resume to learn more about my experience, skills, and
          qualifications.
        </p>
        <motion.button
          onClick={handleDownload}
          disabled={downloading}
          className={`
            inline-flex items-center space-x-2 px-6 py-3 rounded-lg font-medium
            transition-all duration-300
            ${theme === 'dark' ? 'bg-violet-600 hover:bg-violet-700 text-white' : 'bg-black hover:bg-gray-800 text-white'}
          `}
          whileHover={{
            scale: 1.05,
          }}
          whileTap={{
            scale: 0.95,
          }}
        >
          <span>
            {downloaded
              ? 'Downloaded!'
              : downloading
                ? 'Downloading...'
                : 'Download Resume'}
          </span>
          <motion.span
            animate={
              downloading
                ? {
                    rotate: 360,
                  }
                : {}
            }
            transition={{
              duration: 1,
              repeat: Infinity,
              ease: 'linear',
            }}
          >
            {downloaded ? <CheckIcon size={18} /> : <DownloadIcon size={18} />}
          </motion.span>
        </motion.button>
      </div>
    </div>
  )
}
