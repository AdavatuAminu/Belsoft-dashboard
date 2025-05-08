import React from 'react';
import Image from 'next/image';

export default function PerformanceDashboard() {
  return (
    <div className="p-6 bg-white w-[514px] h-auto rounded-lg shadow-md">
      <h1 className="text-3xl font-bold text-blue-900 mb-6">Performance</h1>

      <div className="grid grid-cols-2 gap-6">
        {/* LEFT COLUMN */}
        <div className="space-y-6">
          {/* Total User Section */}
          <div className="bg-[#F7F4F4] p-6 rounded-lg shadow-md w-[176px] h-[157px] flex flex-col items-center justify-center">
            <h2 className="text-[14px] font-semibold text-blue-900">Total User</h2>
            <div className="flex items-center mt-2">
              <span className="text-[24px] font-bold text-blue-900">2K</span>
              <span className="text-[14px] text-blue-900">users</span>
              <Image src="/Vector.png" alt="Vector Logo" width={20} height={20} priority />
            </div>
            <div className="mt-4">
              <h3 className="text-sm text-gray-600">Monthly Subscribers</h3>
              <div className="flex items-center mt-2">
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div className="bg-blue-900 h-2.5 rounded-full" style={{ width: '20%' }}></div>
                </div>
                <span className="ml-2 text-yellow-500 font-bold">20</span>
                <span className="text-gray-600">subs</span>
              </div>
            </div>
          </div>

          {/* Rating Section */}
          <div className="bg-white p-6 rounded-lg shadow-md flex items-center w-[176px] h-[71px] mt-12">
            <div className="w-16 h-16 bg-orange-400 rounded-full flex items-center justify-center text-white text-2xl font-bold">65%</div>
            <div className="ml-4">
              <span className="text-gray-600">+1K people rated</span>
              <div className="flex mt-1">
                {[...Array(5)].map((_, idx) => (
                  <svg key={idx} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 15l-5.5 3 1-5.5L2 7.5l5.5-.5L10 2l2.5 5 5.5.5-3.5 4 1 5.5L10 15z" />
                  </svg>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="space-y-6">
          {/* Total Resolved Disputes Section */}
          <div className="bg-[#F7F4F4] p-6 rounded-lg shadow-md w-[216px] h-[81px] flex flex-col items-center justify-center text-center">
            <h2 className="text-[14px] font-semibold text-blue-900">Total Resolved Disputes</h2>
            <div className="flex items-center mt-1">
              <span className="text-[24px] font-bold text-blue-900">25%</span>
              <span className="text-[14px] text-blue-900">disputes</span>
              <Image src="/Vector.png" alt="Vector Logo" width={20} height={20} priority />
            </div>
          </div>

          {/* Total Unresolved Disputes Section */}
          <div className="bg-white p-4 rounded-lg shadow-md w-[216px] h-[183px] flex flex-col items-center justify-center text-center whitespace-nowrap">
            <h2 className="text-[14px] font-semibold text-black">Total Unresolved Disputes</h2>
            <div className="flex items-center -mt-1">
              <span className="text-[24px] font-bold text-black">75%</span>
              <span className="text-[14px] text-black">disputes</span>
              <Image src="/Vector (1).png" alt="Vector Logo" width={20} height={20} priority />
            </div>
            <div className="mt-2">
              <div className="grid grid-cols-3 gap-2 text-[9px] text-gray-600 font-semibold">
                <span>Username</span>
                <span>Issues</span>
                <span>Time</span>
              </div>
              <div className="mt-2 space-y-2">
                <div className="flex items-center justify-between text-[7px]">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-yellow-300 rounded-full"></div>
                    <span className="ml-2">Jane Markus</span>
                  </div>
                  <span className="text-gray-600">My task specia...</span>
                  <span className="text-gray-600">Jan 14 2025</span>
                </div>
                <div className="flex items-center justify-between text-[7px]">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-blue-300 rounded-full"></div>
                    <span className="ml-2">Ngozie Peter</span>
                  </div>
                  <span className="text-gray-600">My task specia...</span>
                  <span className="text-gray-600">Jan 14 2025</span>
                </div>
              </div>
              <div className="-mt-2 text-right">
                <a href="#" className="text-[#006A05] text-[9px]">View more queries</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
