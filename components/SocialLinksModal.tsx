"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalTrigger,
} from "./ui/AnimatedModal";

// Social media link interface
interface SocialLink {
  name: string;
  url: string;
  icon: React.ReactNode;
  color: string;
  hoverColor: string;
}

// Social links data
const socialLinks: SocialLink[] = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/waruna-udara/",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
      </svg>
    ),
    color: "bg-[#0077B5]",
    hoverColor: "hover:bg-[#005885]",
  },
  {
    name: "GitHub",
    url: "https://github.com/WarunaUdara",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
      </svg>
    ),
    color: "bg-[#333333]",
    hoverColor: "hover:bg-[#24292e]",
  },
  {
    name: "Email",
    url: "mailto:warunaudarasam2003@gmail.com",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
        <path d="M0 3v18h24v-18h-24zm21.518 2l-9.518 7.713-9.518-7.713h19.036zm-19.518 14v-11.817l10 8.104 10-8.104v11.817h-20z"/>
      </svg>
    ),
    color: "bg-[#EA4335]",
    hoverColor: "hover:bg-[#D93025]",
  },
  {
    name: "Medium",
    url: "https://medium.com/@warunaudarasampath",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
        <path d="M7.5 4.5c-2.485 0-4.5 2.015-4.5 4.5s2.015 4.5 4.5 4.5 4.5-2.015 4.5-4.5-2.015-4.5-4.5-4.5zm9 1.5c-1.657 0-3 1.343-3 3s1.343 3 3 3 3-1.343 3-3-1.343-3-3-3zm4.5 1.5c-.828 0-1.5.671-1.5 1.5s.672 1.5 1.5 1.5 1.5-.671 1.5-1.5-.672-1.5-1.5-1.5z" />
      </svg>
    ),
    color: "bg-[#000000]",
    hoverColor: "hover:bg-[#292929]",
  },
];

// Notification component for clipboard copy feedback
const CopyNotification = ({ isVisible }: { isVisible: boolean }) => {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 10, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -10, scale: 0.8 }}
          transition={{ type: "spring", stiffness: 300, damping: 15 }}
          className="absolute bottom-20 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-4 py-2 rounded-full shadow-lg z-50 flex items-center gap-2"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20 6L9 17L4 12" />
          </svg>
          Link copied to clipboard!
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const SocialLinkItem = ({ link, index, onCopy }: { link: SocialLink; index: number; onCopy: (url: string) => void }) => {
  const [isCopied, setIsCopied] = useState(false);
  
  const handleCopy = (url: string) => {
    setIsCopied(true);
    onCopy(url);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <motion.div
      className={`flex items-center p-4 rounded-lg mb-3 ${link.color} ${link.hoverColor} text-white transition-all duration-300 transform hover:scale-[1.02]`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ 
        opacity: 1, 
        y: 0,
        transition: { delay: 0.1 * index }
      }}
      whileHover={{ x: 5 }}
    >
      <a 
        href={link.url}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center flex-1 min-w-0"
      >
        <div className="mr-4 flex-shrink-0 text-white">{link.icon}</div>
        <div className="flex-1 min-w-0">
          <h3 className="font-medium">{link.name}</h3>
          <p className="text-xs text-white/80 truncate max-w-full">
            {link.name === "Email" ? "warunaudarasam2003@gmail.com" : link.url}
          </p>
        </div>
        <div className="text-white/80 ml-2 flex-shrink-0">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </a>

      <motion.button
        onClick={() => handleCopy(link.url)}
        className="ml-2 p-2 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-all flex-shrink-0 relative"
        whileTap={{ scale: 0.9 }}
      >
        {isCopied ? (
          <motion.svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="16" 
            height="16" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
            initial={{ scale: 0 }}
            animate={{ 
              scale: 1,
              rotate: 10, // Changed from [0, 10, -10, 0] to just 10 degrees
              transition: { 
                scale: { type: "spring", stiffness: 200, damping: 10 },
                rotate: { type: "spring", stiffness: 200, damping: 10 }
              }
            }}
          >
            <path d="M20 6L9 17L4 12" />
          </motion.svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z"/>
            <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z"/>
          </svg>
        )}
      </motion.button>
    </motion.div>
  );
};

export const SocialLinksModal = ({ 
  children, 
  className 
}: { 
  children: React.ReactNode;
  className?: string;
}) => {
  const [copiedNotification, setCopiedNotification] = useState(false);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopiedNotification(true);
      setTimeout(() => setCopiedNotification(false), 2000);
    }).catch(err => {
      console.error('Failed to copy: ', err);
    });
  };

  return (
    <Modal>
      <ModalTrigger className={className}>
        {children}
      </ModalTrigger>
      <ModalBody className="w-full max-w-sm bg-black dark:bg-black rounded-3xl border border-neutral-800">
        <ModalContent className="p-6">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6"
          >
            <h2 className="text-2xl font-bold text-white">Connect With Me</h2>
            <p className="text-gray-400 mt-1">
              Find me on these platforms and let&apos;s talk!
            </p>
          </motion.div>
          <div className="space-y-3">
            {socialLinks.map((link, index) => (
              <SocialLinkItem 
                key={link.name} 
                link={link} 
                index={index} 
                onCopy={copyToClipboard}
              />
            ))}
          </div>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { delay: 0.5 } }}
            className="mt-6 text-center"
          >
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Looking forward to connecting with you!
            </p>
          </motion.div>
          
          <CopyNotification isVisible={copiedNotification} />
        </ModalContent>
      </ModalBody>
    </Modal>
  );
};

export default SocialLinksModal;