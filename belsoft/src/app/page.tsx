'use client'

import Header from '../components/Header'
import RevenueChart from '../components/RevenueChart'
import JobOversight from '../components/JobOversight'
import AccountManagement from '../components/AccountManagement'
import Sidebar from '@/components/Sidebar'
import PerformanceDashboard from '@/components/PerformanceDashboard'

export default function Home() {
  return (
    <div className="bg-[#006A05] p-4">
      <div className="flex h-[1024px]">
        <div className="hidden md:block">
          <Sidebar />
        </div>

        <div className="flex-1 flex flex-col">
          <div className="w-full -mt-4">
            <Header />
          </div>

          <main className="-mt-2 p-6 overflow-y-auto overflow-x-hidden bg-[#F7F4F4] rounded-xl h-[944px] w-[1350px]">
          <span className='text-[30px] font-semibold text-blue-900'>Overview</span>
          <div className="grid grid-cols-2 gap-12 mt-6">
            <RevenueChart />
            <PerformanceDashboard />
            </div>
            <div className="grid grid-cols-2 gap-6 mt-12">
              <JobOversight />
              <AccountManagement />
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}
