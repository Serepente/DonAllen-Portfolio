import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useTheme } from '../../contexts/ThemeContext'
import emailjs from '@emailjs/browser'
import { toast, Toaster } from 'sonner'
import ReCAPTCHA from 'react-google-recaptcha'

// import ReCAPTCHA from 'react-google-recaptcha'

export const ContactPage: React.FC = () => {
  const { theme } = useTheme()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!formData.name || !formData.email || !formData.message) {
      toast.error('Please fill in all fields')
      return
    }

    if (!formData.email.includes('@')) {
      toast.error('Please enter a valid email address')
      return
    }

    if (!recaptchaToken) {
      toast.error('Please complete the reCAPTCHA')
      return
    }

    setIsSubmitting(true)

    try {
      const result = await emailjs.send(
        'service_1xdp0ui',
        'template_imc87ln',
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_email: 'velosodonallen@gmail.com',
        },
        'WUBqd5uaoVrReFtjV'
      )

      if (result.status === 200) {
        toast.success('Message sent successfully!')
        setFormData({ name: '', email: '', message: '' })
        setRecaptchaToken(null)
      }
    } catch (error) {
      toast.error('Failed to send message. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="relative">
      <Toaster position="top-right" />
      <motion.h1
        className={`text-6xl font-bold mb-16 ${theme === 'dark'
            ? 'text-violet-400 drop-shadow-[0_0_25px_rgba(167,139,250,0.3)]'
            : ''
          }`}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        CONTACT
      </motion.h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
        {/* Stay in Touch Section */}
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.1,
          }}
        >
          <h2
            className={`text-sm font-medium mb-4 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}
          >
            STAY IN TOUCH
          </h2>
          <div
            className={`space-y-2 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-800'}`}
          >
            <p>velosodonallen@gmail.com</p>
            <p>+63 916 525 1335</p>
          </div>
        </motion.div>
        {/* Social Section */}
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.2,
          }}
        >
          <h2
            className={`text-sm font-medium mb-4 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}
          >
            SOCIAL
          </h2>
          <div
            className={`space-y-2 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-800'}`}
          >
            <motion.a
              href="https://www.facebook.com/donallenveloso123"
              target="_blank"
              rel="noopener noreferrer"
              className={`block hover:underline ${theme === 'dark' ? 'hover:text-violet-400' : 'hover:text-gray-900'} transition-colors`}
              whileHover={{
                x: 2,
              }}
            >
              Facebook
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/don-allen-veloso-650185248/"
              target="_blank"
              rel="noopener noreferrer"
              className={`block hover:underline ${theme === 'dark' ? 'hover:text-violet-400' : 'hover:text-gray-900'} transition-colors`}
              whileHover={{
                x: 2,
              }}
            >
              LinkedIn
            </motion.a>
            <motion.a
              href="https://github.com/Serepente"
              target="_blank"
              rel="noopener noreferrer"
              className={`block hover:underline ${theme === 'dark' ? 'hover:text-violet-400' : 'hover:text-gray-900'} transition-colors`}
              whileHover={{
                x: 2,
              }}
            >
              GitHub
            </motion.a>
          </div>
        </motion.div>
        {/* Address Section */}
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.3,
          }}
        >
          <h2
            className={`text-sm font-medium mb-4 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}
          >
            ADDRESS
          </h2>
          <div
            className={`space-y-2 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-800'}`}
          >
            <p>Jugo Street Corner Rizal Street</p>
            <p>Maribojoc, Bohol</p>
            <p>PH 6336</p>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="max-w-2xl"
      >
        <h2
          className={`text-3xl font-bold mb-8 ${theme === 'dark' ? 'text-violet-400' : ''
            }`}
        >
          LEAVE A MESSAGE
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label
                className={`block text-sm font-medium mb-2 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                  }`}
              >
                NAME
              </label>
              <input
                type="text"
                value={formData.name}
                placeholder="Your name"
                className={`w-full px-4 py-3 rounded-lg border ${theme === 'dark'
                    ? 'bg-gray-800 border-gray-700 text-white'
                    : 'bg-white border-gray-300'
                  } focus:outline-none focus:ring-2 focus:ring-violet-500`}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
            </div>
            <div>
              <label
                className={`block text-sm font-medium mb-2 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                  }`}
              >
                E-MAIL
              </label>
              <input
                type="email"
                value={formData.email}
                placeholder="@"
                className={`w-full px-4 py-3 rounded-lg border ${theme === 'dark'
                    ? 'bg-gray-800 border-gray-700 text-white'
                    : 'bg-white border-gray-300'
                  } focus:outline-none focus:ring-2 focus:ring-violet-500`}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
            </div>
          </div>

          <div>
            <label
              className={`block text-sm font-medium mb-2 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                }`}
            >
              MESSAGE
            </label>
            <textarea
              value={formData.message}
              placeholder="Your message"
              rows={6}
              className={`w-full px-4 py-3 rounded-lg border ${theme === 'dark'
                  ? 'bg-gray-800 border-gray-700 text-white'
                  : 'bg-white border-gray-300'
                } focus:outline-none focus:ring-2 focus:ring-violet-500`}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
            />
          </div>

          <div>
            <ReCAPTCHA
              sitekey="6Lc0n1orAAAAAPn-JnjM3RT4xdRlNaZCsvhnwavP"
              onChange={(token) => setRecaptchaToken(token)}
              theme={theme}
            />
          </div>

          <motion.button
            type="submit"
            disabled={isSubmitting}
            className={`px-8 py-3 rounded-lg font-medium transition-colors ${theme === 'dark'
                ? 'bg-violet-600 hover:bg-violet-700 text-white'
                : 'bg-black hover:bg-gray-800 text-white'
              } ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
            whileHover={{ scale: isSubmitting ? 1 : 1.05 }}
            whileTap={{ scale: isSubmitting ? 1 : 0.95 }}
          >
            {isSubmitting ? 'SENDING...' : 'SEND'}
          </motion.button>
        </form>
      </motion.div>
    </div>
  )
}
