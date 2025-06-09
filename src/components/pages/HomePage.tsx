import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { GithubIcon, LinkedinIcon, FacebookIcon, MailIcon, MessageCircleIcon} from 'lucide-react'
import { useTheme } from '../../contexts/ThemeContext'
// interface HomePageProps {
//   onNavigateToContact: () => void
// }
// export const HomePage: React.FC<HomePageProps> = ({ onNavigateToContact }) => {
export const HomePage: React.FC = () => {
  const { theme } = useTheme()
  const [displayText, setDisplayText] = useState('')
  const [roleIndex, setRoleIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const roles = [
    'Freelance Web Developer',
    'Freelance Backend Developer',
    'Freelance Fullstack Developer',
  ]
  useEffect(() => {
    const currentRole = roles[roleIndex]
    const typeSpeed = 100
    const deleteSpeed = 50
    const pauseDuration = 2000
    if (!isDeleting && displayText === currentRole) {
      // Pause at full word
      setTimeout(() => setIsDeleting(true), pauseDuration)
      return
    }
    if (isDeleting && displayText === '') {
      // Move to next word
      setIsDeleting(false)
      setRoleIndex((current) => (current + 1) % roles.length)
      return
    }
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          setDisplayText(currentRole.substring(0, displayText.length + 1))
        } else {
          setDisplayText(currentRole.substring(0, displayText.length - 1))
        }
      },
      isDeleting ? deleteSpeed : typeSpeed,
    )
    return () => clearTimeout(timeout)
  }, [displayText, isDeleting, roleIndex, roles])
  const socialLinks = [
    {
      icon: <GithubIcon size={20} />,
      label: 'GitHub',
      url: 'https://github.com/Serepente',
    },
    {
      icon: <LinkedinIcon size={20} />,
      label: 'LinkedIn',
      url: 'https://www.linkedin.com/in/don-allen-veloso-650185248/',
    },
    {
      icon: <FacebookIcon size={20} />,
      label: 'Facebook',
      url: 'https://www.facebook.com/donallenveloso123',
    },
     {
      icon: <MessageCircleIcon size={20} />,
      label: 'WhatsApp',
      url: 'https://wa.me/+639165251335',
    },
    {
      icon: <MailIcon size={20} />,
      label: 'Email',
      url: 'mailto:velosodonallen@gmail.com',
    },
  ]
  return (
    <div className="relative min-h-[80vh] flex flex-col md:flex-row items-start justify-between overflow-hidden">
      {/* Modern Gradient Background */}
      <motion.div
        className="absolute inset-0 -z-10"
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          duration: 1,
        }}
      >
        <div
          className={`absolute inset-0 opacity-50 ${theme === 'dark' ? 'bg-gradient-to-br from-violet-900/30 via-transparent to-gray-900' : 'bg-gradient-to-br from-blue-100 via-transparent to-purple-100'}`}
        />
        <motion.div
          className={`absolute top-0 -right-1/4 w-96 h-96 rounded-full blur-3xl ${theme === 'dark' ? 'bg-violet-600/20' : 'bg-blue-200/40'}`}
          animate={{
            y: [0, 20, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
        />
        <motion.div
          className={`absolute bottom-0 left-1/4 w-96 h-96 rounded-full blur-3xl ${theme === 'dark' ? 'bg-violet-800/20' : 'bg-purple-200/30'}`}
          animate={{
            y: [0, -20, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
        />
      </motion.div>
      {/* Existing Content */}
      <div className="relative z-10 flex flex-col md:flex-row items-start max-w-5xl">
        <motion.div
          className="mb-8 md:mb-0 md:mr-12"
          initial={{
            scale: 0.8,
            opacity: 0,
          }}
          animate={{
            scale: 1,
            opacity: 1,
          }}
          transition={{
            duration: 0.5,
          }}
        >
          <div className="relative">
            <div className="w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-2 border-gray-300">
              <motion.img
                src="/images/pp.jpg"
                alt="Don Allen Veloso"
                className="w-full h-full object-cover"
                whileHover={{
                  scale: 1.1,
                }}
                transition={{
                  duration: 0.3,
                }}
              />
            </div>
            <motion.div
              className="absolute -bottom-2 -right-2 bg-black text-white px-3 py-1 text-sm rounded"
              initial={{
                opacity: 0,
                y: 10,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.6,
              }}
            >
              Available for work
            </motion.div>
          </div>
        </motion.div>
        <div className="flex-1">
          <motion.div
            initial={{
              x: -20,
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
            <motion.h1
              className={`text-7xl md:text-8xl lg:text-9xl font-black tracking-tight mb-2 ${theme === 'dark' ? 'text-violet-400 drop-shadow-[0_0_25px_rgba(167,139,250,0.3)]' : ''}`}
              initial={{
                y: 20,
                opacity: 0,
              }}
              animate={{
                y: 0,
                opacity: 1,
              }}
              transition={{
                delay: 0.4,
              }}
            >
              Don
              <br />
              Allen
              <br />
              Veloso
            </motion.h1>
            <motion.div
              className={`w-24 h-1 my-6 ${theme === 'dark' ? 'bg-violet-400' : 'bg-black'}`}
              initial={{
                width: 0,
              }}
              animate={{
                width: 96,
              }}
              transition={{
                delay: 0.6,
                duration: 0.4,
              }}
            />
            <motion.p
              className={`text-xl uppercase font-medium mb-4 h-8 ${theme === 'dark' ? 'text-violet-300' : ''}`}
              initial={{
                y: 20,
                opacity: 0,
              }}
              animate={{
                y: 0,
                opacity: 1,
              }}
              transition={{
                delay: 0.8,
              }}
            >
              {displayText}
              <span className="inline-block w-0.5 h-5 ml-1 bg-current animate-blink" />
            </motion.p>
            <motion.p
              className={`max-w-md mb-8 text-lg ${theme === 'dark' ? 'text-violet-200' : 'text-gray-600'}`}
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              transition={{
                delay: 1,
              }}
            >
              I'm a backend developer specializing in Laravel, PHP, and SQL, with fullstack skills to build complete, scalable web solutions. I turn ideas into efficient, user-friendly applications.
            </motion.p>
            <motion.div
              className="flex space-x-6 mb-8"
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
              {socialLinks.map((link) => (
                <motion.a
                  key={link.label}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${theme === 'dark' ? 'text-violet-400 hover:text-violet-300' : 'text-gray-600 hover:text-black'} transition-colors`}
                  whileHover={{
                    y: -2,
                  }}
                  transition={{
                    duration: 0.2,
                  }}
                >
                  {link.icon}
                </motion.a>
              ))}
            </motion.div>
            {/* <motion.button
              onClick={onNavigateToContact}
              className={`${theme === 'dark' ? 'bg-violet-600 hover:bg-violet-700 text-white' : 'bg-black hover:bg-gray-800 text-white'} px-8 py-3 rounded transition-colors mb-16`}
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              transition={{
                delay: 1.4,
              }}
              whileHover={{
                scale: 1.05,
              }}
              whileTap={{
                scale: 0.95,
              }}
            >
              Hire Me
            </motion.button> */}
          </motion.div>
        </div>
      </div>
      <motion.div
        className={`absolute bottom-0 left-0 w-full h-px ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-200'}`}
        initial={{
          scaleX: 0,
        }}
        animate={{
          scaleX: 1,
        }}
        transition={{
          delay: 1.6,
          duration: 0.8,
        }}
      />
    </div>
  )
}
