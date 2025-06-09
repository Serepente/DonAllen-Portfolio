import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTheme } from '../../contexts/ThemeContext'
import { ProjectModal } from '../ProjectModal'
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react'
export const ProjectsPage: React.FC = () => {
  const { theme } = useTheme()
  const [selectedProject, setSelectedProject] = useState<any>(null)
  const [currentPage, setCurrentPage] = useState(0)
  const projects = [
    {
      title: 'CompEd',
      type: 'Social Media Site',
      description:
        'COMPED is a school-based social media platform designed to enhance student engagement and communication. It features job postings, RFID/QR code attendance tracking, a payment system, and inventory management—all integrated into one unified system.',
      image: '/images/comped.png',
      tags: ['FULLSTACK'],
      url: 'https://ubcomped.com',
      technologies: [
        {
          name: 'Laravel',
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-plain.svg',
        },
        {
          name: 'MySQL',
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
        },
        {
          name: 'Bootstrap',
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-plain.svg',
        },
      ],
    },
    {
      title: 'Smart-Hommie',
      type: 'IoT technology',
      description:
        'Smart-Hommie is a web-based IoT project that allows users to remotely control smart home devices. It offers a user-friendly interface for managing appliances, enhancing home convenience, security, and automation.',
      image: '/images/smarthommie.png',
      tags: ['IoT Fullstack'],
      url: 'https://smart-hommie.netlify.app/',
      technologies: [
        {
          name: 'HTML',
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html/html.svg',
        },
        {
          name: 'Bootstrap',
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-plain.svg',
        },
        {
          name: 'Python',
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-plain.svg',
        },
      ],
    },
    {
      title: 'CompEd RFID Attendance Monitoring',
      type: 'Attendance System',
      description:
        'CompEd RFID Attendance Monitoring is a system that uses RFID technology to track and record student attendance efficiently. Integrated into the CompEd platform, it offers real-time logging, secure data handling, and streamlined reporting for schools.',
      image: '/images/rfid.png',
      tags: ['BACKEND', 'SYSTEM ADMINISTRATOR'],
      url: 'https://ubcomped.com',
      technologies: [
        {
          name: 'Laravel',
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-plain.svg',
        },
        {
          name: 'MySQL',
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
        },
        {
          name: 'Bootstrap',
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-plain.svg',
        },
      ],
    },
    {
      title: 'Mindful Haven',
      type: 'Mental Health Website',
      description:
        'Mindful Haven is an informative mental health website that provides resources, articles, and tools to support emotional well-being. It aims to promote awareness, self-care, and access to helpful information in a safe, user-friendly space.',
      image: '/images/haven.png',
      tags: ['DESIGN', 'FRONTEND'],
      url: 'https://mindfulhaven.netlify.app/',
      technologies: [
        {
          name: 'HTML',
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html/html.svg',
        },
        {
          name: 'Bootstrap',
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-plain.svg',
        },

      ],
    },
    {
      title: 'Picsure',
      type: 'Online Image Processing Project',
      description:
        'Picsure is an online image processing project powered by machine vision. It features shape detection, face recognition, image editing, and filter effects offering users intelligent and interactive image analysis tools.',
      image: '/images/picsure.png',
      tags: ['DESIGN', 'FRONTEND', 'BACKEND'],
      url: '#',
      technologies: [
        {
          name: 'PHP',
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-plain.svg',
        },
        {
          name: 'Bootstrap',
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-plain.svg',
        },
                {
          name: 'Python',
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-plain.svg',
        },
        {
          name: 'Flask',
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-plain.svg',
        },
      ],
    },
  ]
  const projectsPerPage = 3
  const totalPages = Math.ceil(projects.length / projectsPerPage)
  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages)
  }
  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages)
  }
  const visibleProjects = projects.slice(
    currentPage * projectsPerPage,
    (currentPage + 1) * projectsPerPage,
  )
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
        PROJECTS
      </motion.h1>
      <div className="relative max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="wait">
            {visibleProjects.map((project, index) => (
              <motion.div
                key={`${currentPage}-${index}`}
                className={`relative rounded-lg overflow-hidden cursor-pointer ${theme === 'dark' ? 'bg-gray-800/50' : 'bg-white'}`}
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
                  delay: index * 0.1,
                }}
                onClick={() => setSelectedProject(project)}
              >
                <div className="relative h-48">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    whileHover={{
                      scale: 1.05,
                    }}
                    transition={{
                      duration: 0.3,
                    }}
                  />
                </div>
                <div className="p-6">
                  <h3
                    className={`text-xl font-bold mb-2 ${theme === 'dark' ? 'text-violet-400' : ''}`}
                  >
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-500 mb-4">{project.type}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className={`px-3 py-1 text-sm rounded-full ${theme === 'dark' ? 'bg-violet-500/20 text-violet-300' : 'bg-gray-100 text-gray-700'}`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
        {totalPages > 1 && (
          <div className="mt-12 flex items-center justify-center gap-8">
            <motion.button
              className={`p-2 rounded-full ${theme === 'dark' ? 'bg-violet-600/20 hover:bg-violet-600/30 text-white' : 'bg-gray-200 hover:bg-gray-300 text-gray-700'} transition-colors`}
              onClick={prevPage}
              whileHover={{
                scale: 1.1,
              }}
              whileTap={{
                scale: 0.9,
              }}
            >
              <ChevronLeftIcon size={20} />
            </motion.button>
            <div className="flex items-center gap-3">
              {Array.from({
                length: totalPages,
              }).map((_, index) => (
                <motion.button
                  key={index}
                  className={`w-2.5 h-2.5 rounded-full transition-colors ${currentPage === index ? (theme === 'dark' ? 'bg-violet-400 scale-125' : 'bg-gray-800 scale-125') : theme === 'dark' ? 'bg-gray-600' : 'bg-gray-300'}`}
                  onClick={() => setCurrentPage(index)}
                  whileHover={{
                    scale: 1.3,
                  }}
                  transition={{
                    duration: 0.2,
                  }}
                />
              ))}
            </div>
            <motion.button
              className={`p-2 rounded-full ${theme === 'dark' ? 'bg-violet-600/20 hover:bg-violet-600/30 text-white' : 'bg-gray-200 hover:bg-gray-300 text-gray-700'} transition-colors`}
              onClick={nextPage}
              whileHover={{
                scale: 1.1,
              }}
              whileTap={{
                scale: 0.9,
              }}
            >
              <ChevronRightIcon size={20} />
            </motion.button>
          </div>
        )}
      </div>
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  )
}
