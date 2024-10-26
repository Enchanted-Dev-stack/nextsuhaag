'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import confetti from 'canvas-confetti'
import { Heart, Sparkles } from 'lucide-react'

export function ThankYouPageComponent() {
  const [showConfetti, setShowConfetti] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowConfetti(true)
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      })
    }, 1000)

    return () => clearTimeout(timer);
  }, [])

  return (
    (<div
      className="min-h-screen bg-gradient-to-br from-pink-100 to-purple-200 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-white rounded-lg shadow-2xl p-8 max-w-md w-full text-center">
        <motion.div
          animate={{ rotate: [0, 10, -10, 10, 0] }}
          transition={{ duration: 0.5, delay: 0.5 }}>
          <Heart className="w-16 h-16 text-red-500 mx-auto mb-4" />
        </motion.div>
        <motion.h1
          initial={{ y: -20 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-3xl font-bold text-gray-800 mb-4">
          Thank You!
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-gray-600 mb-6">
          Your journey to finding love begins here. We've received your details and are excited to help you find your perfect match!
        </motion.p>
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="bg-pink-100 rounded-lg p-4 mb-6">
          <p className="text-pink-800 font-semibold">
            "Love is not about finding the right person, but creating a right relationship. It's not about how much love you have in the beginning but how much love you build till the end."
          </p>
        </motion.div>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-gradient-to-r from-pink-500 to-purple-500 text-white font-bold py-2 px-4 rounded-full shadow-lg hover:shadow-xl transition duration-300">
          Explore Matches
        </motion.button>
      </motion.div>
      {showConfetti && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="absolute top-0 left-0 w-full h-full pointer-events-none">
          <Sparkles
            className="w-8 h-8 text-yellow-400 absolute top-1/4 left-1/4 animate-pulse" />
          <Sparkles className="w-6 h-6 text-pink-400 absolute top-3/4 left-1/3 animate-pulse" />
          <Sparkles
            className="w-10 h-10 text-purple-400 absolute top-1/2 right-1/4 animate-pulse" />
        </motion.div>
      )}
    </div>)
  );
}