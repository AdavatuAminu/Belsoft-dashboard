import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";

export default function JobOversight() {
  const [isDateDropdownOpen, setIsDateDropdownOpen] = useState(false);
  const [isJobDropdownOpen, setIsJobDropdownOpen] = useState(false);

  const dateDropdownRef = useRef<HTMLDivElement | null>(null);
  const jobDropdownRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dateDropdownRef.current && !dateDropdownRef.current.contains(event.target as Node)) {
        setIsDateDropdownOpen(false);
      }
      if (jobDropdownRef.current && !jobDropdownRef.current.contains(event.target as Node)) {
        setIsJobDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <section className="bg-white p-6 rounded-lg shadow-md w-full max-w-[601px] h-auto min-h-[485px]">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-[20px] font-bold text-blue-900">Job Oversight</h2>
      </div>
      <div className="flex space-x-4 mb-6">
        <input
          type="text"
          placeholder="Search for Jobs"
          className="p-2 border rounded-lg w-full text-blue-900 placeholder-blue-900 focus:outline-none text-[12px] max-w-[246px] h-[33px] sm:w-auto"
        />
        <button className="p-2 border rounded-lg bg-white text-blue-900 text-[10px] w-[56px] h-[33px]">
          Filter
        </button>
        <div className="relative" ref={dateDropdownRef}>
          <button
            onClick={() => setIsDateDropdownOpen(!isDateDropdownOpen)}
            className="p-2 border rounded-lg bg-white text-blue-900 text-[10px] flex items-center w-[77px] h-[33px] justify-center"
          >
            Date
            <svg
              className="ml-2 w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              ></path>
            </svg>
          </button>
          {isDateDropdownOpen && (
            <div className="absolute top-full mt-2 bg-white border border-[#0a0a55] rounded-[20px] shadow-[0_4px_20px_rgba(0,0,0,0.2)] min-w-[100px] max-w-[150px] h-[117px] z-10 text-[#0a0a55] font-semibold text-[10px] overflow-hidden flex flex-col justify-center">
              {["Last 1 Week", "Last 2 Weeks", "Last Month", "Last 5 Months"].map((label, index) => (
                <label
                  key={label}
                  className={`flex items-center whitespace-nowrap gap-2 py-1 px-2 cursor-pointer ${
                    index > 0 ? "border-t border-[#0a0a55]" : ""
                  }`}
                >
                  <input
                    type="radio"
                    name="date"
                    value={label}
                    className="appearance-none w-4 h-4 border-2 border-[#0a0a55] rounded-full relative focus:outline-none checked:bg-transparent checked:border-[#0a0a55] checked:after:content-[''] checked:after:absolute checked:after:w-2 checked:after:h-2 checked:after:bg-[#0a0a55] checked:after:rounded-full checked:after:top-[2px] checked:after:left-[2px]"
                    defaultChecked={index === 0}
                  />
                  <span>{label}</span>
                </label>
              ))}
            </div>
          )}
        </div>
        <div className="relative" ref={jobDropdownRef}>
          <button
            onClick={() => setIsJobDropdownOpen(!isJobDropdownOpen)}
            className="p-2 border rounded-lg bg-white text-blue-900 text-[10px] flex items-center w-[77px] h-[33px] justify-center"
          >
            Jobs
            <svg
              className="ml-2 w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              ></path>
            </svg>
          </button>
          {isJobDropdownOpen && (
            <div className="absolute top-full mt-2 bg-white border border-[#0a0a55] rounded-[20px] shadow-[0_4px_20px_rgba(0,0,0,0.2)] min-w-[100px] max-w-[150px] h-[117px] z-10 text-[#0a0a55] font-semibold text-[10px] overflow-hidden flex flex-col justify-center">
              {["Technological jobs", "Business jobs", "Handy jobs", "Scientific jobs"].map(
                (label, index) => (
                  <label
                    key={label}
                    className={`flex items-center whitespace-nowrap gap-2 py-[6px] px-3 cursor-pointer ${
                      index > 0 ? "border-t border-[#0a0a55]" : ""
                    }`}
                  >
                    <input
                      type="radio"
                      name="jobType"
                      value={label}
                      className="appearance-none w-4 h-4 border-2 border-[#0a0a55] rounded-full relative focus:outline-none checked:bg-transparent checked:border-[#0a0a55] checked:after:content-[''] checked:after:absolute checked:after:w-2 checked:after:h-2 checked:after:bg-[#0a0a55] checked:after:rounded-full checked:after:top-[2px] checked:after:left-[2px]"
                    />
                    <span>{label}</span>
                  </label>
                )
              )}
            </div>
          )}
        </div>
      </div>
      <div className="space-y-6">
        <div className="flex items-center mb-1">
          <Image src="/Frame 202 (1).png" alt="avatar3" width={26} height={26} />
          <strong className="text-blue-900 text-[11px] ml-3">Mack Zuckerberg</strong>
        </div>
        <h3 className="text-[16px] font-semibold text-blue-900">Install Security Cameras for TechHub</h3>
        <p className="text-gray-600 text-[12px] -mt-6">Budget: N4000</p>
        <div className="flex flex-col space-y-1 -mt-4">
          <p className="text-gray-600 text-[10px]">
            A growing tech company needs a technician to install 6 CCTV cameras in their office space. The job
            requires running cables through walls and configuring the security system.
          </p>
          <a href="#" className="text-blue-500 text-[11px]">View More...</a>
          <div className="flex items-center mt-2 text-gray-600 text-[11px]">
            <Image
              src="/location.png"
              alt="Location Icon"
              width={12}
              height={12}
              className="mr-1"
            />
            Lagos, Nigeria
            <Image
              src="/tabler_flag.png"
              alt="Heart Icon"
              width={12}
              height={12}
              className="ml-2"
            />
            <Image
              src="/tdesign_heart.png"
              alt="Heart Icon"
              width={12}
              height={12}
              className="ml-2"
            />
          </div>
        </div>
        <div className="flex items-center mb-1">
          <Image src="/Frame 202.png" alt="avatar3" width={26} height={26} />
          <strong className="text-blue-900 text-[11px] ml-3">Mack Zuckerberg</strong>
        </div>
        <h3 className="text-[16px] font-semibold text-blue-900">Install Security Cameras for TechHub</h3>
        <p className="text-gray-600 text-[12px] -mt-6">Budget: N4000</p>
        <div className="flex flex-col space-y-1 -mt-4">
          <p className="text-gray-600 text-[10px]">
            A growing tech company needs a technician to install 6 CCTV cameras in their office space. The job
            requires running cables through walls and configuring the security system.
          </p>
          <a href="#" className="text-blue-500 text-[11px]">View More...</a>
          <div className="flex items-center mt-2 text-gray-600 text-[11px]">
            <Image
              src="/location.png"
              alt="Location Icon"
              width={12}
              height={12}
              className="mr-1"
            />
            Lagos, Nigeria
            <Image
              src="/tabler_flag.png"
              alt="Heart Icon"
              width={12}
              height={12}
              className="ml-2"
            />
            <Image
              src="/tdesign_heart.png"
              alt="Heart Icon"
              width={12}
              height={12}
              className="ml-2"
            />
          </div>
        </div>
      </div>
    </section>
  );
}