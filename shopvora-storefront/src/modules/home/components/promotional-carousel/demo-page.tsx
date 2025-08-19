import ImageCarousel from "./image-carousel"
import { imageCarouselData, minimalImageCarouselData } from "./image-carousel-data"

export default function CarouselDemoPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold text-gray-900">Image Carousel Demo</h1>
          <p className="text-gray-600 mt-2">
            Examples of the new image carousel component with control buttons positioned under the carousel
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-8 space-y-12">
        
        {/* Full Featured Carousel */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">
            Full Featured Carousel (with text overlay)
          </h2>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <ImageCarousel
              slides={imageCarouselData}
              height="h-[600px]"
              autoPlayInterval={5000}
              showControls={true}
              showIndicators={true}
              showProgressBar={true}
              showPlayPause={true}
              enableSwipe={true}
            />
          </div>
          <div className="mt-4 p-4 bg-blue-50 rounded-lg">
            <h3 className="font-semibold text-blue-900 mb-2">Features:</h3>
            <ul className="text-blue-800 text-sm space-y-1">
              <li>• Text overlay with title, subtitle, description, and CTA button</li>
              <li>• Control buttons positioned under the carousel</li>
              <li>• White buttons with #2A1454 SVG color</li>
              <li>• Auto-play with pause on hover</li>
              <li>• Touch swipe support</li>
              <li>• Keyboard navigation</li>
            </ul>
          </div>
        </section>

        {/* Minimal Carousel */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">
            Minimal Carousel (images only)
          </h2>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <ImageCarousel
              slides={minimalImageCarouselData}
              height="h-[400px]"
              autoPlayInterval={4000}
              showControls={true}
              showIndicators={true}
              showProgressBar={true}
              showPlayPause={false}
              enableSwipe={true}
            />
          </div>
          <div className="mt-4 p-4 bg-green-50 rounded-lg">
            <h3 className="font-semibold text-green-900 mb-2">Features:</h3>
            <ul className="text-green-800 text-sm space-y-1">
              <li>• Images only, no text overlay</li>
              <li>• Shorter height (400px)</li>
              <li>• Faster auto-play interval (4 seconds)</li>
              <li>• No play/pause button</li>
              <li>• Same control styling under carousel</li>
            </ul>
          </div>
        </section>

        {/* Custom Height Carousel */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">
            Custom Height Carousel
          </h2>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <ImageCarousel
              slides={imageCarouselData.slice(0, 3)} // Only first 3 slides
              height="h-[300px]"
              autoPlayInterval={6000}
              showControls={true}
              showIndicators={true}
              showProgressBar={false}
              showPlayPause={true}
              enableSwipe={true}
            />
          </div>
          <div className="mt-4 p-4 bg-purple-50 rounded-lg">
            <h3 className="font-semibold text-purple-900 mb-2">Features:</h3>
            <ul className="text-purple-800 text-sm space-y-1">
              <li>• Custom height (300px)</li>
              <li>• Slower auto-play (6 seconds)</li>
              <li>• No progress bar</li>
              <li>• Limited to 3 slides</li>
              <li>• Same control styling under carousel</li>
            </ul>
          </div>
        </section>

        {/* Instructions */}
        <section className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            How to Use This Carousel
          </h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">1. Save Your Images</h3>
              <p className="text-gray-600 text-sm">
                Place your banner images in: <code className="bg-gray-100 px-2 py-1 rounded">/public/images/banners/</code>
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">2. Update the Data</h3>
              <p className="text-gray-600 text-sm">
                Edit <code className="bg-gray-100 px-2 py-1 rounded">image-carousel-data.ts</code> to match your images
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">3. Import and Use</h3>
              <pre className="bg-gray-100 p-3 rounded text-sm overflow-x-auto">
{`import ImageCarouselWrapper from "@/modules/home/components/promotional-carousel/image-carousel-wrapper"

export default function YourPage() {
  return <ImageCarouselWrapper />
}`}
              </pre>
            </div>
          </div>
        </section>

        {/* Key Features */}
        <section className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Key Features
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Control Buttons</h3>
              <ul className="text-gray-600 text-sm space-y-1">
                <li>• Positioned under the carousel</li>
                <li>• White circular buttons with shadow</li>
                <li>• SVG color: #2A1454</li>
                <li>• Smooth hover transitions</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Slide Indicators</h3>
              <ul className="text-gray-600 text-sm space-y-1">
                <li>• Positioned under the carousel</li>
                <li>• Active color: #2A1454</li>
                <li>• Click to navigate directly</li>
                <li>• Smooth transitions</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Auto-Play</h3>
              <ul className="text-gray-600 text-sm space-y-1">
                <li>• Configurable intervals</li>
                <li>• Pause on hover/focus</li>
                <li>• Play/pause button</li>
                <li>• Progress bar indicator</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Accessibility</h3>
              <ul className="text-gray-600 text-sm space-y-1">
                <li>• Keyboard navigation</li>
                <li>• Touch swipe support</li>
                <li>• ARIA labels</li>
                <li>• Screen reader friendly</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
} 