import { Star } from 'lucide-react';
import Image from 'next/image';

export default function TaskSpecialistCard() {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6 flex justify-between items-start w-full max-w-[554px] h-auto min-h-[108px]">
      <div className="space-y-4 -mt-3">
        <h2 className="text-[20px] font-bold text-[#0a0a55]">Popular Task Specialist</h2>

        <div className="grid grid-cols-2">
          <div>
            <p className="text-[10px] font-medium text-[#0a0a55]">Task Completion In Due Date</p>
            <div className="w-64 h-4 overflow-hidden mt-1">
              <Image src="/red bar.png" alt="green bar" width={120} height={50} priority />
            </div>
          </div>

          <div>
            <p className="text-[10px] font-medium text-[#0a0a55]">Uncompleted task</p>
            <div className="w-64 h-4 overflow-hidden mt-1">
            <Image src="/Frame 277.png" alt="red bar" width={120} height={50} priority />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#f9f9f9] rounded-xl p-3 shadow-sm flex flex-col items-center justify-center w-[106px] h-[71px] whitespace-nowrap">
        <div className="flex -space-x-3 mb-1">
          <Image src="/Ellipse 18.png" alt="avatar1" width={26} height={26} className="rounded-full" />
          <Image src="/Ellipse 19.png" alt="avatar2" width={26} height={26} className="rounded-full" />
          <Image src="/Ellipse 20.png" alt="avatar3" width={26} height={26} className="rounded-full" />
          <span className="text-[10px] font-normal ml-2 mt-1 text-[#0a0a55]">+100</span>
        </div>
        <p className="text-[10px] text-[#0a0a55] font-medium">Most rated</p>
        <div className="flex space-x-1 text-yellow-400 mt-1 w-[67px] h-[17px]">
          {Array(4).fill(0).map((_, i) => (
            <Star key={i} size={16} fill="none" stroke="currentColor" strokeWidth={4}/>
          ))}
        </div>
      </div>
    </div>
  );
}
