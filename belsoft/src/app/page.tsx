'use client'

import Header from '../components/Header'
import RevenueChart from '../components/RevenueChart'
import JobOversight from '../components/JobOversight'
import AccountManagement from '../components/AccountManagement'
import Sidebar from '@/components/Sidebar'

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
            <RevenueChart />
            <div className="grid grid-cols-2 gap-6 mt-6">
              <JobOversight />
              <AccountManagement />
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}
