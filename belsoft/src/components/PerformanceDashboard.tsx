import React from 'react';
import Image from 'next/image';
import { Star } from 'lucide-react';

export default function PerformanceDashboard() {
  return (
    <div className="p-6 bg-white w-[514px] h-auto rounded-lg">
      <h1 className="text-[20px] font-bold text-blue-900 mb-6">Performance</h1>

      <div className="grid grid-cols-2 gap-6">
        {/* LEFT COLUMN */}
        <div className="space-y-6">
          {/* Total User Section */}
          <div className="bg-[#F7F4F4] p-6 rounded-lg w-[176px] h-[157px] flex flex-col items-center justify-center">
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
          <div className="flex items-center w-[176px] h-[71px] mt-12">
            <div className="w-[54px] h-[54px] bg-orange-400 rounded-[20px] flex items-center justify-center text-white text-[12.42px] font-normal">65%</div>
            <div className="bg-[#f9f9f9] rounded-xl p-3 shadow-sm flex flex-col items-center justify-center w-[106px] h-[71px] whitespace-nowrap ml-4">
              <div className="flex -space-x-3 mb-1">
                <Image src="/Ellipse 18.png" alt="avatar1" width={26} height={26} className="rounded-full" />
                <Image src="/Ellipse 19.png" alt="avatar2" width={26} height={26} className="rounded-full" />
                <Image src="/Ellipse 20.png" alt="avatar3" width={26} height={26} className="rounded-full" />
                <Image src="/Ellipse 21.png" alt="avatar3" width={26} height={26} className="rounded-full" />
              </div>
              <p className="text-[10px] text-[#0a0a55] font-medium">+1k people rated</p>
              <div className="flex space-x-1 text-yellow-400 mt-1 w-[67px] h-[17px]">
                {Array(4).fill(0).map((_, i) => (
                  <Star key={i} size={16} fill="none" stroke="currentColor" strokeWidth={4}/>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="space-y-6">
          {/* Total Resolved Disputes Section */}
          <div className="bg-[#F7F4F4] p-6 rounded-lg w-[216px] h-[81px] flex flex-col items-center justify-center text-center">
            <h2 className="text-[14px] font-semibold text-blue-900">Total Resolved Disputes</h2>
            <div className="flex items-center mt-1">
              <span className="text-[24px] font-bold text-blue-900">25%</span>
              <span className="text-[14px] text-blue-900">disputes</span>
              <Image src="/Vector.png" alt="Vector Logo" width={20} height={20} priority />
            </div>
          </div>

          {/* Total Unresolved Disputes Section */}
          <div className="bg-white p-4 shadow-md rounded-lg w-[216px] h-[183px] flex flex-col items-center justify-center text-center whitespace-nowrap">
            <h2 className="text-[14px] font-semibold text-black">Total Unresolved Disputes</h2>
            <div className="flex items-center mt-2">
              <span className="text-[24px] font-bold text-black">75%</span>
              <span className="text-[14px] text-black">disputes</span>
              <Image src="/Vector (1).png" alt="Vector Logo" width={20} height={20} priority />
            </div>
            <div className="mt-4">
              <div className="grid grid-cols-3 gap-2 text-[9px] text-gray-600 font-semibold">
                <span>Username</span>
                <span>Issues</span>
                <span>Time</span>
              </div>
              <div className="mt-2 space-y-2">
                <div className="flex items-center justify-between text-[7px]">
                  <div className="flex items-center">
                  <Image src="/Ellipse 20.png" alt="avatar3" width={15} height={15} className="rounded-full" />
                    <span className="ml-2">Jane Markus</span>
                  </div>
                  <span className="text-gray-600">My task specia...</span>
                  <span className="text-gray-600">Jan 14 2025</span>
                </div>
                <div className="flex items-center justify-between text-[7px]">
                  <div className="flex items-center">
                  <Image src="/Ellipse 21.png" alt="avatar3" width={15} height={15} className="rounded-full" />
                    <span className="ml-2">Ngozie Peter</span>
                  </div>
                  <span className="text-gray-600">My task specia...</span>
                  <span className="text-gray-600">Jan 14 2025</span>
                </div>
              </div>
              <div className="mt-2 text-right">
                <a href="#" className="text-[#006A05] text-[9px]">View more queries</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
