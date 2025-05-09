import React from 'react';
import Image from 'next/image';

export default function AccountManagement() {
  return (
    <section className="bg-white p-6 rounded-lg shadow-md w-[554px] h-[321px]">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-[20px] font-bold">Account Management</h2>
        <a href="#" className="text-[#006A05] flex items-center text-[10px]">
          View More
          <Image src="/mingcute_arrows-right-line.png" alt="Arrow Logo" width={20} height={20} priority />
        </a>
      </div>
      <div className="grid grid-cols-5 gap-4 font-semibold text-gray-700 text-[13px] mt-8">
        <span>User ID</span>
        <span>Name of user</span>
        <span>User status</span>
        <span>Status</span>
        <span>Admin control</span>
      </div>
      <div className="space-y-4">
        <div className="grid grid-cols-5 gap-4 items-center text-[11px] whitespace-nowrap mt-8">
          <span>#CCCS45</span>
          <div className="flex items-center text-[11px] -ml-4">
            <Image src="/Ellipse 19.png" alt="avatar2" width={18} height={18} className="rounded-full" />
            <span className="ml-2">Patrick James</span>
          </div>
          <div className="flex items-center text-[11px]">
          <Image src="/Pfile.png" alt="avatar2" width={18} height={18} className="rounded-full" />
          <span className="ml-1">Professional</span>
          </div>
          <span className="text-red-500 flex items-center text-[11px]">
          <button className="bg-[#B80405] text-white px-3 py-1 rounded flex items-center text-[6px] justify-center w-[55px] h-[14px]">
          <Image src="/Deactive.png" alt="avatar2" width={9} height={9} className="rounded-full" />
          <span className="ml-1">Deactivate</span>
          </button>
          </span>
          <button className="bg-[#006A05] text-white px-3 py-1 rounded flex items-center text-[6px] justify-center w-[55px] h-[14px] ml-4">
            Activate
          </button>
        </div>
        <div className="grid grid-cols-5 gap-4 items-center text-[11px] whitespace-nowrap">
          <span>#CCCS45</span>
          <div className="flex items-center text-[11px] -ml-4">
            <Image src="/Ellipse 19.png" alt="avatar2" width={18} height={18} className="rounded-full" />
            <span className="ml-2">Patrick James</span>
          </div>
          <div className="flex items-center text-[11px]">
          <Image src="/Pfile.png" alt="avatar2" width={18} height={18} className="rounded-full" />
          <span className="ml-1">Professional</span>
          </div>
          <span className="text-green-500 flex items-center text-[11px]">
          <button className="bg-[#006A05] text-white px-3 py-1 rounded flex items-center text-[6px] justify-center w-[55px] h-[14px]">
          <Image src="/Deactive.png" alt="avatar2" width={9} height={9} className="rounded-full" />
          <span className="ml-1">Activate</span>
          </button>
          </span>
          <button className="bg-[#006A05] text-white px-3 py-1 rounded flex items-center text-[6px] justify-center w-[55px] h-[14px] ml-4">
            Activate
          </button>
        </div>
        <div className="grid grid-cols-5 gap-4 items-center text-[11px] whitespace-nowrap">
          <span>#CCCS45</span>
          <div className="flex items-center -ml-4">
            <Image src="/Ellipse 19.png" alt="avatar2" width={18} height={18} className="rounded-full" />
            <span className="ml-2">Patrick James</span>
          </div>
          <div className="flex items-center text-[11px]">
          <Image src="/Pfile.png" alt="avatar2" width={18} height={18} className="rounded-full" />
          <span className="ml-1">Professional</span>
          </div>
          <button className="bg-[#B80405] text-white px-3 py-1 rounded flex items-center text-[6px] justify-center w-[55px] h-[14px]">
          <Image src="/Deactive.png" alt="avatar2" width={9} height={9} className="rounded-full" />
          <span className="ml-1">Deactivate</span>
          </button>
          <button className="bg-[#006A05] text-white px-3 py-1 rounded flex items-center text-[6px] justify-center w-[55px] h-[14px] ml-4">
            Activate
          </button>
        </div>
        <div className="grid grid-cols-5 gap-4 items-center text-[11px] whitespace-nowrap">
          <span>#CCCS45</span>
          <div className="flex items-center -ml-4">
            <Image src="/Ellipse 19.png" alt="avatar2" width={18} height={18} className="rounded-full" />
            <span className="ml-2">Patrick James</span>
          </div>
          <div className="flex items-center text-[11px]">
          <Image src="/Pfile.png" alt="avatar2" width={18} height={18} className="rounded-full" />
          <span className="ml-1">Professional</span>
          </div>
          <span className="text-red-500 flex items-center text-[11px]">
          <button className="bg-[#006A05] text-white px-3 py-1 rounded flex items-center text-[6px] justify-center w-[55px] h-[14px]">
          <Image src="/Deactive.png" alt="avatar2" width={9} height={9} className="rounded-full" />
          <span className="ml-1">Activate</span>
          </button>
          </span>
          <button className="bg-[#006A05] text-white px-3 py-1 rounded flex items-center text-[6px] justify-center w-[55px] h-[14px] ml-4">
            Activate
          </button>
        </div>
      </div>
    </section>
  );
}