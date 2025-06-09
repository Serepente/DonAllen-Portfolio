import React from 'react'
import { useTheme } from '../../contexts/ThemeContext'
export const AboutPage: React.FC = () => {
  const { theme } = useTheme()
  return (
    <div className="w-full max-w-4xl mx-auto px-6 py-8">
      <h1
        className={`text-6xl font-bold mb-12 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}
      >
        ABOUT ME
      </h1>
      <div
        className={`space-y-8 text-lg ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}
      >
        <p className="leading-relaxed">
          I'm a backend developer and Computer Engineering student with a strong
          focus on Laravel, PHP, and SQL. I specialize in building robust and
          scalable systems that support data-driven web applications. My
          experience includes creating RESTful APIs, managing databases, and
          developing secure, high-performance server-side logic.
        </p>
        <p className="leading-relaxed">
          Alongside my backend expertise, I also work as a fullstack developer,
          bringing front-end interfaces to life with clean, responsive design.
          This combination allows me to deliver complete end-to-end solutions
          that are both functional and user-friendly.
        </p>
        <p className="leading-relaxed">
          As a student and developer, I'm passionate about clean code,
          continuous learning, and solving real-world problems through
          technology. Whether collaborating with a team or working
          independently, I strive to build web applications that are reliable,
          efficient, and impactful.
        </p>
      </div>
    </div>
  )
}
