"use client";
import { BadgeCheck, EarthLock, UsersRound } from 'lucide-react'
import React from 'react'
import { motion } from 'framer-motion'

function Features() {
  return (
    <section className="py-20 max-md:py-5 bg-white rounded-2xl max-sm:my-5">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold mb-12 text-center text-gray-800 font-SpaceMono">
                Why Choose Suhaag?
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  {
                    icon: UsersRound,
                    title: "Millions of Profiles",
                    description:
                      "Search by location,profession,community &more.Get matches on whatsapp and email as per your preferences.",
                  },
                  {
                    icon: BadgeCheck,
                    title: "Verified by Visit",
                    description: "We strictly verify & collect every single profile by personal visit",
                  },
                  {
                    icon: EarthLock,
                    title: "100% Privacy",
                    description: "We maintain 100% privacy. No one can see your details, pictures & number without your permission",
                  },
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                    viewport={{ once: true }}
                    className="text-center"
                  >
                    <div className="bg-pink-100 rounded-full p-4 inline-block mb-4 max-sm:mb-2">
                      <feature.icon className="w-8 h-8 text-pink-600" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2 font-SpaceMono">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 max-sm:font-light font-SpaceMono max-sm:text-sm">{feature.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
  )
}

export default Features
