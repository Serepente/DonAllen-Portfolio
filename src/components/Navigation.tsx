import React from 'react'
import { motion } from 'framer-motion'
import { useTheme } from '../contexts/ThemeContext'
interface NavigationProps {
  pages: {
    id: number
    name: string
    component: React.ReactNode
  }[]
  activePage: number
  onPageChange: (pageId: number) => void
}
export const Navigation: React.FC<NavigationProps> = ({
  pages,
  activePage,
  onPageChange,
}) => {
  const { theme } = useTheme()
  return (
    <motion.div
      className={`relative transition-colors duration-300 ${theme === 'dark' ? 'text-white' : 'text-black'} px-8 py-6 flex flex-col w-[280px]`}
      initial={{
        x: 20,
        opacity: 0,
      }}
      animate={{
        x: 0,
        opacity: 1,
      }}
      transition={{
        delay: 0.3,
      }}
    >
      {/* Vertical Line */}
      <div
        className={`absolute left-6 top-8 h-[calc(100%-120px)] w-px transition-colors duration-300 ${theme === 'dark' ? 'bg-violet-400 shadow-[0_0_15px_rgba(167,139,250,0.5)]' : 'bg-gray-200'}`}
      />
      <nav>
        <ul className="space-y-3">
          {pages.map((page) => (
            <motion.li
              key={page.id}
              initial={{
                x: 20,
                opacity: 0,
              }}
              animate={{
                x: 0,
                opacity: 1,
              }}
              transition={{
                delay: page.id * 0.1,
              }}
            >
              <motion.button
                onClick={() => onPageChange(page.id)}
                className={`group flex items-center text-left w-full py-1.5 transition-all duration-300 relative ${theme === 'dark' ? 'text-white' : 'text-black'} ${activePage === page.id ? 'font-bold' : 'font-normal hover:font-bold'}`}
                whileHover={{
                  x: 4,
                }}
                transition={{
                  duration: 0.2,
                }}
              >
                {activePage === page.id && (
                  <motion.div
                    className={`absolute -left-6 w-1 h-6 rounded-full ${theme === 'dark' ? 'bg-violet-400 shadow-[0_0_10px_rgba(167,139,250,0.5)] animate-pulse' : 'bg-black shadow-[0_0_10px_rgba(0,0,0,0.3)] animate-pulse'}`}
                    layoutId="activeIndicator"
                    transition={{
                      type: 'spring',
                      stiffness: 300,
                      damping: 30,
                    }}
                  />
                )}
                <motion.div
                  className={`absolute inset-0 rounded-lg -z-10 ${theme === 'dark' ? `${activePage === page.id ? 'bg-violet-500/20' : 'bg-violet-500/10'}` : `${activePage === page.id ? 'bg-black/10' : 'bg-black/5'}`} opacity-0 transition-opacity duration-200 ${activePage === page.id ? 'opacity-100' : 'group-hover:opacity-50'}`}
                />
                <span
                  className={`w-8 text-sm ${theme === 'dark' ? 'opacity-50' : 'opacity-70'}`}
                >
                  {page.id < 10 ? `0${page.id}` : page.id}
                </span>
                <span className="text-base tracking-wide">{page.name}</span>
              </motion.button>
            </motion.li>
          ))}
        </ul>
      </nav>
      <motion.div
        className={`mt-6 pt-4 border-t transition-colors duration-300 ${theme === 'dark' ? 'border-gray-800 text-gray-400' : 'border-gray-200 text-gray-600'}`}
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          delay: 1.2,
        }}
      >
        <div className="text-sm">velosodonallen@gmail.com</div>
        <div className="text-sm">+63 916 525 1335</div>
      </motion.div>
    </motion.div>
  )
}
