import React from 'react'
import Link from 'next/link'
import Aurora from './ui/Aurora'
import SocialLinksModal from './SocialLinksModal'

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
       
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center py-8">
          {/* Name and Tagline */}
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold text-white">Waruna Udara</h2>
            <p className="text-sm text-gray-400 mt-2">
              Help you create experiences where aesthetics & <br />functionality seamlessly come together.
            </p>
            
            {/* Social Icons */}
            <div className="flex space-x-4 mt-4">
              
            </div>
          </div>

          {/* Navigation Links */}
          <div className="grid grid-cols-2 gap-x-12 gap-y-6">
            <div>
              <h3 className="text-lg font-medium mb-3 text-white">General</h3>
              <ul className="space-y-2">
                <li><Link href="/" className="text-gray-400 hover:text-white transition-colors">Home</Link></li>
                <li><Link href="#projects" className="text-gray-400 hover:text-white transition-colors">Projects</Link></li>
                <li>
                  <SocialLinksModal className="p-0 text-left text-gray-400 hover:text-white transition-colors">
                    <span>Blog</span>
                  </SocialLinksModal>
                </li>
                <li><Link href="#about" className="text-gray-400 hover:text-white transition-colors">About</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-3 text-white">The Website</h3>
              <ul className="space-y-2">
                
                <li><Link href="/bucket-list" className="text-gray-400 hover:text-white transition-colors">Bucket List</Link></li>
                <li>
                  <SocialLinksModal className="p-0 text-left text-gray-400 hover:text-white transition-colors">
                    <span>Contact Links</span>
                  </SocialLinksModal>
                </li>
                
              </ul>
            </div>
          </div>

          {/* Contact Section */}
          <div className="mt-6 md:mt-0">
            <p className="text-sm text-gray-300">
              Feel free to reach out to me for any<br />
              inquiries or collaboration opportunities.
            </p>
            <SocialLinksModal className="p-0 text-left text-blue-400 hover:underline mt-2 inline-block">
              <span>warunaudarasam2003@gmail.com</span>
            </SocialLinksModal>
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