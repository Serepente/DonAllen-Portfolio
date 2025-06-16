import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTheme } from '../contexts/ThemeContext'
import { MenuIcon, XIcon } from 'lucide-react'
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
  const [isMenuOpen, setIsMenuOpen] = useState(false) 
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
  return (
    <>
      {/* Mobile Menu Button */}
      <motion.button
        onClick={toggleMenu}
        className={`md:hidden fixed top-6 right-6 z-50 p-2 rounded-lg ${theme === 'dark' ? 'bg-gray-800 text-white hover:bg-gray-700' : 'bg-white text-black hover:bg-gray-100'} shadow-lg`}
        whileHover={{
          scale: 1.05,
        }}
        whileTap={{
          scale: 0.95,
        }}
      >
        {isMenuOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
      </motion.button>
      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden"
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            onClick={() => setIsMenuOpen(false)}
          />
        )}
      </AnimatePresence>
      {/* Navigation Content */}
      <motion.div
        className={`fixed md:relative transition-colors duration-300 ${theme === 'dark' ? 'text-white' : 'text-black'} px-8 py-6 flex flex-col w-[280px] h-full z-40
        ${isMenuOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'} 
        transition-transform duration-300 ease-in-out
        ${theme === 'dark' ? 'bg-gray-900 md:bg-transparent' : 'bg-white md:bg-transparent'}`}
        initial={false}
      >
        {/* Vertical Line */}
        <div
          className={`absolute left-6 top-8 h-[calc(100%-120px)] w-px transition-colors duration-300 ${theme === 'dark' ? 'bg-violet-400 shadow-[0_0_15px_rgba(167,139,250,0.5)]' : 'bg-gray-200'}`}
        />
        <nav className="mt-12 md:mt-0">
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
                  onClick={() => {
                    onPageChange(page.id)
                    setIsMenuOpen(false)
                  }}
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
    </>
  )
}
