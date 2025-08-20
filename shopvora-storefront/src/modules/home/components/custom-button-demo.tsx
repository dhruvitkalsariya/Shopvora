"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import CustomButton, { CarouselIndicatorButton } from "./hero/custom-button"
import { 
  Play, 
  Pause, 
  Settings, 
  Eye, 
  EyeOff, 
  Maximize, 
  Minimize,
  RotateCcw,
  Zap,
  ArrowRight,
  Star,
  Heart
} from "lucide-react"

export default function CustomButtonDemo() {
  const [activeIndicator, setActiveIndicator] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Custom Button Demo
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Showcasing the custom button component with exact Figma specifications
          </p>
        </div>

        {/* Button Specifications */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Button Specifications
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-700 mb-4">CSS Properties</h3>
              <div className="bg-gray-50 rounded-lg p-4 font-mono text-sm">
                <pre>{`position: absolute;
width: 86px;
height: 8px;
left: 372px;
top: 0px;
background: #2A1454;
box-shadow: inset 0px 0px 5px rgba(17, 17, 18, 0.2);
border-radius: 8px;`}</pre>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-700 mb-4">Color Palette</h3>
              <div className="space-y-3">
                <div className="flex items-center">
                  <div 
                    className="w-8 h-8 rounded mr-3"
                    style={{ backgroundColor: '#2A1454' }}
                  ></div>
                  <span className="text-sm font-mono">#2A1454 - Primary Color</span>
                </div>
                <div className="flex items-center">
                  <div 
                    className="w-8 h-8 rounded mr-3 border border-gray-300"
                    style={{ backgroundColor: '#FFFFFF' }}
                  ></div>
                  <span className="text-sm font-mono">#FFFFFF - Background</span>
                </div>
                <div className="flex items-center">
                  <div 
                    className="w-8 h-8 rounded mr-3"
                    style={{ backgroundColor: 'rgba(17, 17, 18, 0.2)' }}
                  ></div>
                  <span className="text-sm font-mono">rgba(17, 17, 18, 0.2) - Shadow</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Button Variants */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Button Variants
          </h2>
          
          <div className="space-y-8">
            {/* Primary Buttons */}
            <div>
              <h3 className="text-lg font-semibold text-gray-700 mb-4">Primary Buttons</h3>
              <div className="flex flex-wrap gap-4">
                <CustomButton variant="primary" size="sm">
                  Small
                </CustomButton>
                <CustomButton variant="primary" size="md">
                  Medium
                </CustomButton>
                <CustomButton variant="primary" size="lg">
                  Large
                </CustomButton>
                <CustomButton variant="primary" size="md" className="flex items-center">
                  <Play className="w-4 h-4 mr-2" />
                  Play
                </CustomButton>
              </div>
            </div>

            {/* Secondary Buttons */}
            <div>
              <h3 className="text-lg font-semibold text-gray-700 mb-4">Secondary Buttons</h3>
              <div className="flex flex-wrap gap-4">
                <CustomButton variant="secondary" size="sm">
                  Small
                </CustomButton>
                <CustomButton variant="secondary" size="md">
                  Medium
                </CustomButton>
                <CustomButton variant="secondary" size="lg">
                  Large
                </CustomButton>
                <CustomButton variant="secondary" size="md" className="flex items-center">
                  <Pause className="w-4 h-4 mr-2" />
                  Pause
                </CustomButton>
              </div>
            </div>

            {/* Outline Buttons */}
            <div>
              <h3 className="text-lg font-semibold text-gray-700 mb-4">Outline Buttons</h3>
              <div className="flex flex-wrap gap-4">
                <CustomButton variant="outline" size="sm">
                  Small
                </CustomButton>
                <CustomButton variant="outline" size="md">
                  Medium
                </CustomButton>
                <CustomButton variant="outline" size="lg">
                  Large
                </CustomButton>
                <CustomButton variant="outline" size="md" className="flex items-center">
                  <Settings className="w-4 h-4 mr-2" />
                  Settings
                </CustomButton>
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Demo */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Interactive Demo
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Carousel Indicators */}
            <div>
              <h3 className="text-lg font-semibold text-gray-700 mb-4">Carousel Indicators</h3>
              <div className="space-y-4">
                <div className="flex space-x-2">
                  {[0, 1, 2, 3, 4].map((index) => (
                    <CarouselIndicatorButton
                      key={index}
                      isActive={index === activeIndicator}
                      onClick={() => setActiveIndicator(index)}
                    />
                  ))}
                </div>
                <p className="text-sm text-gray-500">
                  Active indicator: {activeIndicator + 1}
                </p>
              </div>
            </div>

            {/* Control Buttons */}
            <div>
              <h3 className="text-lg font-semibold text-gray-700 mb-4">Control Buttons</h3>
              <div className="space-y-4">
                <CustomButton
                  onClick={() => setIsPlaying(!isPlaying)}
                  variant={isPlaying ? "primary" : "secondary"}
                  size="md"
                  className="flex items-center"
                >
                  {isPlaying ? (
                    <>
                      <Pause className="w-4 h-4 mr-2" />
                      Pause
                    </>
                  ) : (
                    <>
                      <Play className="w-4 h-4 mr-2" />
                      Play
                    </>
                  )}
                </CustomButton>
                
                <CustomButton
                  onClick={() => setActiveIndicator((prev) => (prev + 1) % 5)}
                  variant="outline"
                  size="md"
                  className="flex items-center"
                >
                  <ArrowRight className="w-4 h-4 mr-2" />
                  Next
                </CustomButton>
              </div>
            </div>
          </div>
        </div>

        {/* Animation Showcase */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Animation Showcase
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="text-center"
            >
              <CustomButton variant="primary" size="lg" className="mb-3">
                <Star className="w-6 h-6" />
              </CustomButton>
              <p className="text-sm text-gray-600">Hover & Tap</p>
            </motion.div>

            <motion.div
              animate={{ 
                y: [0, -10, 0],
                rotate: [0, 5, 0]
              }}
              transition={{ 
                duration: 2, 
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="text-center"
            >
              <CustomButton variant="secondary" size="lg" className="mb-3">
                <Heart className="w-6 h-6" />
              </CustomButton>
              <p className="text-sm text-gray-600">Floating</p>
            </motion.div>

            <motion.div
              animate={{ 
                scale: [1, 1.1, 1],
                rotate: [0, 360]
              }}
              transition={{ 
                duration: 3, 
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="text-center"
            >
              <CustomButton variant="outline" size="lg" className="mb-3">
                <Zap className="w-6 h-6" />
              </CustomButton>
              <p className="text-sm text-gray-600">Pulse & Rotate</p>
            </motion.div>
          </div>
        </div>

        {/* Usage Examples */}
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Usage Examples
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-700 mb-4">Basic Usage</h3>
              <div className="bg-gray-50 rounded-lg p-4 font-mono text-sm">
                <pre>{`<CustomButton
  onClick={handleClick}
  variant="primary"
  size="md"
>
  Click Me
</CustomButton>`}</pre>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-700 mb-4">Carousel Indicator</h3>
              <div className="bg-gray-50 rounded-lg p-4 font-mono text-sm">
                <pre>{`<CarouselIndicatorButton
  isActive={index === currentSlide}
  onClick={() => goToSlide(index)}
/>`}</pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 