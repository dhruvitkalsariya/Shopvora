"use client"

export default function HeaderDemo() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Header Implementation Demo
          </h1>
          <p className="text-lg text-gray-600">
            This page demonstrates the header states before and after login
          </p>
        </div>

        {/* Before Login State */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">
            Before Login State
          </h2>
          <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
            <div className="flex items-center min-w-[160px]">
              <div className="text-2xl font-bold text-purple-600">Shopvora</div>
            </div>
            
            <div className="flex-1 max-w-2xl mx-6">
              <div className="relative">
                <input
                  type="search"
                  placeholder="Search for Products, Brands and More"
                  className="w-full pl-10 pr-10 py-2 rounded-lg border placeholder-gray-500 text-sm bg-gray-100"
                  disabled
                />
                <div className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400">
                  🔍
                </div>
              </div>
            </div>
            
            <div className="flex items-center space-x-2">
              <button className="px-4 py-2 text-sm font-medium text-white bg-purple-600 hover:bg-purple-700 rounded-lg transition-colors duration-200 shadow-sm">
                Login
              </button>
              
              <div className="relative flex items-center justify-center w-10 h-10 bg-gray-100 text-gray-700 rounded-lg">
                🛒
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-medium">
                  1
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* After Login State */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">
            After Login State
          </h2>
          <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
            <div className="flex items-center min-w-[160px]">
              <div className="text-2xl font-bold text-purple-600">Shopvora</div>
            </div>
            
            <div className="flex-1 max-w-2xl mx-6">
              <div className="relative">
                <input
                  type="search"
                  placeholder="Search for Products, Brands and More"
                  className="w-full pl-10 pr-10 py-2 rounded-lg border placeholder-gray-500 text-sm bg-gray-100"
                  disabled
                />
                <div className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400">
                  🔍
                </div>
              </div>
            </div>
            
            <div className="flex items-center space-x-2">
              <div className="relative flex items-center justify-center w-10 h-10 bg-gray-100 text-gray-700 rounded-lg">
                🛒
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-medium">
                  1
                </span>
              </div>
              
              <div className="relative flex items-center justify-center w-10 h-10 bg-gray-100 text-gray-700 rounded-lg">
                🔔
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-medium">
                  2
                </span>
              </div>
              
              <div className="relative">
                <button className="flex items-center space-x-2 px-3 py-2 text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors duration-200">
                  <div className="w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center text-white text-xs font-bold">
                    J
                  </div>
                  <span>John Doe</span>
                  <span>▼</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-sm text-gray-500">
            The header automatically switches between these states based on user authentication
          </p>
        </div>
      </div>
    </div>
  )
} 