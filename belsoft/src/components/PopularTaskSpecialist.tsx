import { Star } from 'lucide-react';
import Image from 'next/image';

export default function TaskSpecialistCard() {
  return (
    <div className="bg-white rounded-[40px] shadow-sm p-6 flex justify-between items-start w-[554px] h-[108px]">
      {/* Left Section */}
      <div className="space-y-4">
        <h2 className="text-[20px] font-bold text-[#0a0a55]">Popular Task Specialist</h2>

        {/* Progress Bars */}
        <div className="space-y-3">
          {/* Task Completion */}
          <div>
            <p className="text-[10px] font-medium text-[#0a0a55]">Task Completion In Due Date</p>
            <div className="w-64 h-4 bg-gray-200 rounded-full overflow-hidden mt-1">
              <div className="bg-green-700 h-full w-[80%] rounded-full"></div>
            </div>
            <span className="text-xs text-gray-600 ml-2">80%</span>
          </div>

          {/* Uncompleted Task */}
          <div>
            <p className="text-[10px] font-medium text-[#0a0a55]">Uncompleted task</p>
            <div className="w-64 h-4 bg-gray-200 rounded-full overflow-hidden mt-1">
              <div className="bg-red-700 h-full w-[20%] rounded-full"></div>
            </div>
            <span className="text-xs text-gray-600 ml-2">20%</span>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="bg-[#f9f9f9] rounded-xl p-3 shadow-sm flex flex-col items-center h-[106px] w-[71px]">
        <div className="flex -space-x-2 overflow-hidden mb-1">
          <Image src="/avatar1.png" alt="avatar1" width={30} height={30} className="rounded-full border-2 border-white" />
          <Image src="/avatar2.png" alt="avatar2" width={30} height={30} className="rounded-full border-2 border-white" />
          <Image src="/avatar3.png" alt="avatar3" width={30} height={30} className="rounded-full border-2 border-white" />
          <span className="text-sm font-semibold ml-2 mt-1 text-[#0a0a55]">+100</span>
        </div>
        <p className="text-sm text-[#0a0a55] font-medium">Most rated</p>
        <div className="flex space-x-1 text-yellow-400 mt-1">
          {Array(4).fill(0).map((_, i) => (
            <Star key={i} size={16} fill="currentColor" stroke="none" />
          ))}
        </div>
      </div>
    </div>
  );
}
