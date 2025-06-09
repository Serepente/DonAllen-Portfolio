import { useState } from 'react'
import { Navigation } from './components/Navigation'
import { ThemeSelector } from './components/ThemeSelector'
import { HomePage } from './components/pages/HomePage'
import { SkillsPage } from './components/pages/SkillsPage'
import { NextChapter } from './components/NextChapter'
import { AboutPage } from './components/pages/AboutPage'
import { ServicesPage } from './components/pages/ServicesPage'
// import { FactsPage } from './components/pages/FactsPage'
import { ExperiencesPage } from './components/pages/ExperiencesPage'
// import { ReferencesPage } from './components/pages/ReferencesPage'
import { ProjectsPage } from './components/pages/ProjectsPage'
// import { TestimonialsPage } from './components/pages/TestimonialsPage'
import { ContactPage } from './components/pages/ContactPage'
import { ResumePage } from './components/pages/ResumePage'
import { AnimatePresence, motion } from 'framer-motion'
import { ThemeProvider } from './contexts/ThemeContext'
import { useTheme } from './contexts/ThemeContext'
import { Logo } from './components/Logo'
const AppContent = () => {
  const [activePage, setActivePage] = useState(1)
  const { theme } = useTheme()
  const pages = [
    {
      id: 1,
      name: 'TOP',
      component: <HomePage />,
    },
    {
      id: 2,
      name: 'ABOUT ME',
      component: <AboutPage />,
    },
    {
      id: 3,
      name: 'MY SERVICES',
      component: <ServicesPage />,
    },
    {
      id: 4,
      name: 'SKILLS',
      component: <SkillsPage />,
    },
    // {
    //   id: 5,
    //   name: 'FACTS',
    //   component: <FactsPage />,
    // },
    {
      id: 5,
      name: 'EXPERIENCES',
      component: <ExperiencesPage />,
    },
    // {
    //   id: 7,
    //   name: 'REFERENCES',
    //   component: <ReferencesPage />,
    // },
    {
      id: 6,
      name: 'PROJECTS',
      component: <ProjectsPage />,
    },
    {
      id: 7,
      name: 'RESUME',
      component: <ResumePage />,
    },
    {
      id: 8,
      name: 'CONTACT',
      component: <ContactPage />,
    },
  ]
  const handlePageChange = (pageId: number) => {
    setActivePage(pageId)
  }
  const goToNextChapter = () => {
    const nextPage = activePage < pages.length ? activePage + 1 : 1
    setActivePage(nextPage)
  }
  const currentPage = pages.find((page) => page.id === activePage)
  return (
    <motion.div
      className={`flex w-full min-h-screen font-['Inter'] transition-colors duration-300 ${theme === 'dark' ? 'bg-gray-900' : 'bg-blue-200'}`}
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      transition={{
        duration: 0.5,
      }}
    >
      <div className="flex flex-col w-full">
        <motion.div
          className="flex justify-between items-start p-6"
          initial={{
            y: -20,
            opacity: 0,
          }}
          animate={{
            y: 0,
            opacity: 1,
          }}
          transition={{
            delay: 0.2,
          }}
        >
          <Logo />
          <ThemeSelector />
        </motion.div>
        <div className="flex flex-col md:flex-row flex-grow">
          <div className="flex-grow p-6 md:p-10">
            <AnimatePresence mode="wait">
              <motion.div
                key={activePage}
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                exit={{
                  opacity: 0,
                  y: -20,
                }}
                transition={{
                  duration: 0.3,
                }}
              >
                {currentPage && currentPage.component}
              </motion.div>
            </AnimatePresence>
            <div className="mt-10">
              <NextChapter
                currentPage={activePage}
                totalPages={pages.length}
                onNextChapter={goToNextChapter}
              />
            </div>
          </div>
          <Navigation
            pages={pages}
            activePage={activePage}
            onPageChange={handlePageChange}
          />
        </div>
      </div>
    </motion.div>
  )
}
export function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  )
}
