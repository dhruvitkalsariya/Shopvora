"use client"

import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight, Heart } from "lucide-react"
import { useState, useEffect } from "react"
import LocalizedClientLink from "@modules/common/components/localized-client-link"

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    {
      id: 1,
      title: "SALE OFFERS",
      subtitle: "PROMOTION",
      description: "Up to 70% off on selected items",
      buttonText: "Shop Now",
      buttonLink: "/sale",
      bgColor: "bg-gradient-to-r from-purple-600 to-pink-600",
      textColor: "text-yellow-300"
    },
    {
      id: 2,
      title: "NEW ARRIVALS",
      subtitle: "TRENDING",
      description: "Discover the latest fashion trends",
      buttonText: "Explore",
      buttonLink: "/new-arrivals",
      bgColor: "bg-gradient-to-r from-blue-600 to-indigo-600",
      textColor: "text-white"
    },
    {
      id: 3,
      title: "FLASH SALE",
      subtitle: "LIMITED TIME",
      description: "24 hours only - Don't miss out!",
      buttonText: "Buy Now",
      buttonLink: "/flash-sale",
      bgColor: "bg-gradient-to-r from-red-600 to-orange-600",
      textColor: "text-white"
    }
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [slides.length])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  return (
    <div className="relative w-full h-[600px] overflow-hidden">
      {/* Hero Banner */}
      <div className="relative w-full h-full">
        {/* Slides Section - Commented Out */}
        {/*
        {slides.map((slide, index) => (
          <motion.div
            key={slide.id}
            className={`absolute inset-0 ${slide.bgColor} flex items-center justify-center`}
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: index === currentSlide ? 1 : 0,
              scale: index === currentSlide ? 1 : 1.1
            }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            <div className="text-center text-white px-4">
              <motion.h1
                className={`text-6xl md:text-8xl font-bold mb-4 ${slide.textColor} drop-shadow-2xl`}
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                {slide.title}
              </motion.h1>
              <motion.h2
                className={`text-4xl md:text-6xl font-bold mb-6 ${slide.textColor} drop-shadow-xl`}
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                {slide.subtitle}
              </motion.h2>
              <motion.p
                className="text-xl md:text-2xl mb-8 text-white/90"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                {slide.description}
              </motion.p>
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                <LocalizedClientLink
                  href={slide.buttonLink}
                  className="inline-block bg-white text-purple-600 px-8 py-3 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors duration-300 shadow-lg"
                >
                  {slide.buttonText}
                </LocalizedClientLink>
              </motion.div>
            </div>
          </motion.div>
        ))}
        */}

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm"
        >
          <ChevronRight className="h-6 w-6" />
        </button>

        {/* Dots Indicator */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide 
                  ? 'bg-white scale-125' 
                  : 'bg-white/50 hover:bg-white/75'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Floating Elements */}
      <motion.div
        className="absolute top-10 right-10"
        animate={{ 
          y: [0, -10, 0],
          rotate: [0, 5, -5, 0]
        }}
        transition={{ 
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <div className="bg-white/10 backdrop-blur-sm rounded-full p-4">
          <Heart className="h-8 w-8 text-white" />
        </div>
      </motion.div>

      <motion.div
        className="absolute bottom-20 left-10"
        animate={{ 
          y: [0, 10, 0],
          rotate: [0, -5, 5, 0]
        }}
        transition={{ 
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      >
        <div className="bg-white/10 backdrop-blur-sm rounded-full p-3">
          <div className="w-6 h-6 border-2 border-white rounded-full"></div>
        </div>
      </motion.div>
    </div>
  )
}

export default Hero
