'use client'

import React from 'react'
import { SearchIcon, ShieldCheckIcon, LockIcon, UsersIcon, HeartIcon, CoinsIcon } from 'lucide-react'

const FeatureItem = ({ icon: Icon, title, description }) => (
  <div className="flex items-center bg-white rounded-xl shadow-lg mb-2 transition-all duration-300 hover:shadow-xl hover:scale-105 w-[400px] h-[120px] mx-4 flex-shrink-0 overflow-hidden">
    <div className="flex-shrink-0 w-24 h-full bg-primary/10 flex items-center justify-center">
      <Icon className="w-10 h-10 text-primary" />
    </div>
    <div className="flex-grow p-4">
      <h3 className="text-lg font-semibold mb-1 text-gray-800">{title}</h3>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  </div>
)

const features = [
  { icon: SearchIcon, title: "Smart Search", description: "Find your perfect match with our advanced AI-powered search algorithm." },
  { icon: ShieldCheckIcon, title: "Verified Profiles", description: "Every profile is thoroughly vetted for your safety and peace of mind." },
  { icon: LockIcon, title: "Privacy First", description: "Your data is encrypted and never shared without your explicit consent." },
  { icon: UsersIcon, title: "Community Focused", description: "Join events and groups to connect with like-minded individuals." },
  { icon: HeartIcon, title: "Inclusive Matchmaking", description: "Our platform caters to all, ensuring everyone finds their special someone." },
  { icon: CoinsIcon, title: "Flexible Plans", description: "Choose from various subscription options that suit your needs and budget." },
]

export default function MarqueeFeatures() {
  return (
    <section className="bg-gradient-to-br from-gray-50 to-gray-100 py-10 pb-0 overflow-hidden font-Outfit">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-8 text-center">
          Discover Our <span className="text-primary">Unique Features</span>
        </h2>
        <p className="text-sm text-gray-600 max-w-2xl mx-auto text-center mb-12">
          Experience the next generation of matchmaking with our innovative platform designed to bring hearts together.
        </p>
      </div>
      <div className="relative">
        <div className="flex overflow-x-hidden">
          <div className="flex animate-marquee">
            {features.concat(features).map((feature, index) => (
              <FeatureItem key={index} {...feature} />
            ))}
          </div>
          <div className="flex absolute top-0 animate-marquee2">
            {features.concat(features).map((feature, index) => (
              <FeatureItem key={index + features.length} {...feature} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}