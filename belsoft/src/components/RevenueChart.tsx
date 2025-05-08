export default function RevenueChart() {
    return (
        <section className="bg-white p-6 rounded-lg shadow-md w-[670px]">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-semibold text-[#070F65]">Revenue Overview</h2>
          <button className="border border-[#070F65] text-[#070F65] px-3 py-1 rounded flex items-center">
            For every month
            <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </button>
        </div>
        <div className="relative w-full h-80">
          {/* Grid background */}
          <div className="absolute inset-0 grid grid-rows-5 border-t border-l">
            <div className="border-b border-gray-200"></div>
            <div className="border-b border-gray-200"></div>
            <div className="border-b border-gray-200"></div>
            <div className="border-b border-gray-200"></div>
            <div className="border-b border-gray-200"></div>
          </div>
          {/* Y-axis labels */}
          <div className="absolute left-0 top-0 h-full flex flex-col justify-between text-[#070F65] text-sm">
            <span className="mt-1">1000</span>
            <span>750</span>
            <span>500</span>
            <span>250</span>
            <span className="mb-1">0</span>
          </div>
          {/* Chart bars */}
          <div className="relative flex items-end justify-between h-full pl-8 pr-4">
            <div className="w-10 h-24 bg-yellow-400 relative">
              <div className="absolute bottom-full text-red-700 bg-red-500 text-white px-2 py-1 rounded -mb-2">A fall in revenue</div>
            </div>
            <div className="w-10 h-40 bg-blue-400"></div>
            <div className="w-10 h-72 bg-yellow-400"></div>
            <div className="w-10 h-48 bg-blue-400"></div>
            <div className="w-10 h-52 bg-yellow-400"></div>
            <div className="w-10 h-36 bg-blue-400"></div>
            <div className="w-10 h-40 bg-yellow-400"></div>
            <div className="w-10 h-96 bg-blue-400 relative">
              <div className="absolute bottom-full text-green-700 bg-green-600 text-white px-2 py-1 rounded -mb-2">A rise in revenue</div>
            </div>
            <div className="w-10 h-16 bg-yellow-400"></div>
            <div className="w-10 h-80 bg-blue-400"></div>
            <div className="w-10 h-24 bg-yellow-400"></div>
            <div className="w-10 h-48 bg-blue-400"></div>
          </div>
        </div>
        {/* X-axis labels */}
        <div className="flex justify-between mt-2 text-[#070F65] text-sm">
          <span>January</span>
          <span>February</span>
          <span>March</span>
          <span>April</span>
          <span>May</span>
          <span>July</span>
          <span>September</span>
          <span>October</span>
          <span>November</span>
          <span>December</span>
        </div>
      </section>
    )
  }