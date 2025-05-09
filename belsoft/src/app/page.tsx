"use client";

import Header from "../components/Header";
import RevenueChart from "../components/RevenueChart";
import JobOversight from "../components/JobOversight";
import AccountManagement from "../components/AccountManagement";
import Sidebar from "@/components/Sidebar";
import PerformanceDashboard from "@/components/PerformanceDashboard";
import PopularTaskSpecialist from "@/components/PopularTaskSpecialist";

export default function Home() {
  return (
    <div className="bg-[#006A05] p-4 min-h-[1050px]">
      <div className="flex flex-col md:flex-row h-auto">
        <div className="md:w-[195px] w-full mb-4 md:mb-0 md:block hidden md:flex-shrink-0">
          <Sidebar />
        </div>

        <div className="flex-1 flex flex-col">
          <div className="w-full -mt-4">
            <Header />
          </div>

          <main className="-mt-2 p-4 overflow-y-auto overflow-x-hidden bg-[#F7F4F4] rounded-xl min-h-[calc(100vh-200px)] max-w-full">
            <span className="text-2xl font-semibold text-blue-900">Overview</span>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              <RevenueChart />
              <div className="-mt-6 -ml-6">
                <PerformanceDashboard />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-5">
              <div className="-mt-8">
                <JobOversight />
              </div>

              <div>
                <AccountManagement />
              </div>

              <div className="md:col-start-2 -mt-12 md:-mt-35">
                <PopularTaskSpecialist />
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}