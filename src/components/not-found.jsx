'use client'

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"

const Star = ({ top, left, size }) => (
  <div
    className="absolute rounded-full bg-white"
    style={{
      top,
      left,
      width: size,
      height: size,
      animation: `twinkle ${Math.random() * 5 + 3}s infinite`,
    }}
  />
)

export  function NotFoundComponent() {
  return (
    <div className="min-h-screen bg-[#000000] text-white relative overflow-hidden">
      {/* Navigation */}
      <nav className="absolute top-0 left-0 right-0 p-4 z-20">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
            Suhaag
          </Link>
          <div className="flex gap-6 items-center">
            
            <Link href="/tools/biodata-generator" className="hover:text-blue-400 transition-colors">
              Biodata Generator
            </Link>
            <Link href="/contact" className="hover:text-blue-400 transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-7xl font-bold mb-4 tracking-tight">404-error</h1>
          <h2 className="text-4xl font-semibold mb-6">PAGE NOT FOUND</h2>
          <p className="text-gray-400 mb-8">Your search has ventured beyond the known universe.</p>
          <Link href="/">
            <Button  className="bg-transparent border border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white transition-all">
              Back To Home
            </Button>
          </Link>
        </motion.div>
      </div>

      {/* Animated Astronaut */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="absolute right-[20%] top-1/2 -translate-y-1/2 z-10"
      >
        <motion.div
          animate={{
            y: [-20, 20],
            rotate: [-5, 5],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
          className="relative w-[300px] h-[300px]"
        >
          <div className="absolute inset-0 rounded-full bg-blue-500/20 blur-3xl"></div>
          <div className="relative w-full h-full">
            <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiZJ3WP4uqX8qUiXqrdGSgr9el0aTPxX7i3v18XxBioBrCAWqVEk9JXtk43ZnXVAJxw2iTNOorQhROgiDLiK-jZoSZXVdX0BfVl4-4CeppN0rbfk3rSAJANq4bGPpMatjNQq_OsLXZgMHFAHW3Cn0aedFqW0xtdEP-uQ51Tt2IciyRNbwxhX3tAg261Apk9/s500/astronaut-floating-in-space-cartoon-icon-illustration-space-technology-icon-concept-isolated-premium-flat-cartoon-style-vector-removebg-preview.png"/>
          </div>
        </motion.div>
      </motion.div>

      {/* Stars */}
      {[...Array(50)].map((_, i) => (
        <Star
          key={i}
          top={`${Math.random() * 100}%`}
          left={`${Math.random() * 100}%`}
          size={Math.random() * 3 + 1}
        />
      ))}

      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-radial from-blue-900/20 to-transparent z-0"></div>

      <style jsx global>{`
        @keyframes twinkle {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.3; }
        }
        .bg-gradient-radial {
          background-image: radial-gradient(circle at center, var(--tw-gradient-stops));
        }
      `}</style>
    </div>
  )
}