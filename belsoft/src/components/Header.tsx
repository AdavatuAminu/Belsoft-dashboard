import Image from 'next/image';

export default function Header() {
    return (
        <header className="flex justify-between items-center px-6 py-4 bg-transparent">
            <div className="flex items-center space-x-4">
                <div className="flex items-center bg-white border border-gray-600 rounded-xl px-4 py-2 w-[424px] h-[41px]">
                    <span className="w-4 h-4 bg-[#82868C] rounded-full mr-3"></span>
                    <input
                        type="text"
                        placeholder="Search"
                        className="outline-none text-[#82868C] text-[13px] placeholder:text-gray-500 w-full"
                    />
                </div>

                <button className="bg-white border border-gray-600 text-[#82868C] px-2 py-2 rounded-xl text-[10px] font-small w-[55px] h-[41px]">
                    Sort by
                </button>
            </div>
        </header>
    );
}
