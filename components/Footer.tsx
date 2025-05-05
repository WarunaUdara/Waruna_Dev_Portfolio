import React from 'react'
import Link from 'next/link'
import Aurora from './ui/Aurora'

const Footer = () => {
  return (
    <footer id="contact" className="relative w-full py-8 px-4 sm:px-8 md:px-16 lg:px-24">
      {/* Black background base layer with explicit z-index */}
      <div className="absolute inset-0 bg-black" style={{ zIndex: 0 }}></div>
      
      {/* Aurora effect with explicit z-index */}
      <div className="absolute inset-0" style={{ zIndex: 1 }}>
        <Aurora
          colorStops={["#000000", "#4c0080", "#000000"]}
          blend={0.3}
          amplitude={0.7}
          speed={0.15}
        />
      </div>
      
      {/* Content container with higher z-index */}
      <div className="relative" style={{ zIndex: 10 }}>
        <hr className="h-px bg-gradient-to-r from-transparent via-gray-400 to-transparent opacity-40 my-6" />
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center py-8">
          {/* Name and Tagline */}
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold text-white">Waruna Udara</h2>
            <p className="text-sm text-gray-400 mt-2">
              Help you create experiences where aesthetics & <br />functionality seamlessly come together.
            </p>
            
            {/* Social Icons */}
            <div className="flex space-x-4 mt-4">
              <Link href="https://www.linkedin.com/in/waruna-udara/" className="opacity-70 hover:opacity-100">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </Link>
              <Link href="https://github.com/WarunaUdara" className="opacity-70 hover:opacity-100">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </Link>
              <Link href="mailto:warunaudarasam2003@gmail.com" className="opacity-70 hover:opacity-100">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M0 3v18h24v-18h-24zm21.518 2l-9.518 7.713-9.518-7.713h19.036zm-19.518 14v-11.817l10 8.104 10-8.104v11.817h-20z"/>
                </svg>
              </Link>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="grid grid-cols-2 gap-x-12 gap-y-6">
            <div>
              <h3 className="text-lg font-medium mb-3 text-white">General</h3>
              <ul className="space-y-2">
                <li><Link href="/" className="text-gray-400 hover:text-white transition-colors">Home</Link></li>
                <li><Link href="/projects" className="text-gray-400 hover:text-white transition-colors">Projects</Link></li>
                <li><Link href="/blog" className="text-gray-400 hover:text-white transition-colors">Blog</Link></li>
                <li><Link href="/about" className="text-gray-400 hover:text-white transition-colors">About</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-3 text-white">The Website</h3>
              <ul className="space-y-2">
                <li><Link href="/guest-book" className="text-gray-400 hover:text-white transition-colors">Guest Book</Link></li>
                <li><Link href="/bucket-list" className="text-gray-400 hover:text-white transition-colors">Bucket List</Link></li>
                <li><Link href="/links" className="text-gray-400 hover:text-white transition-colors">Links</Link></li>
                <li><Link href="/book-call" className="text-gray-400 hover:text-white transition-colors">Book a call</Link></li>
              </ul>
            </div>
          </div>

          {/* Contact Section */}
          <div className="mt-6 md:mt-0">
            <p className="text-sm text-gray-300">
              Feel free to reach out to me for any<br />
              inquiries or collaboration opportunities.
            </p>
            <Link href="mailto:warunaudarasam2003@gmail.com" className="text-blue-400 hover:underline mt-2 inline-block">
              warunaudarasam2003@gmail.com
            </Link>
          </div>
        </div>
        
        <hr className="h-px bg-gradient-to-r from-transparent via-gray-400 to-transparent opacity-40 my-6" />
        
        <div className="text-center text-sm text-gray-500">
          <p>Copyright © {new Date().getFullYear()} Waruna Udara. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer