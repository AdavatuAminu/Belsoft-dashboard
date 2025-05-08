"use client";

import {
    BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
} from 'recharts';
import Image from 'next/image';

const data = [
    { month: 'January', yellow: 25, blue: 40 },
    { month: 'February', yellow: 90, blue: 55 },
    { month: 'March', yellow: 10, blue: 60 },
    { month: 'April', yellow: 70, blue: 45 },
    { month: 'May', yellow: 60, blue: 48 },
    { month: 'June', yellow: 30, blue: 40 },
    { month: 'July', yellow: 65, blue: 100 },
    { month: 'August', yellow: 50, blue: 70 },
    { month: 'September', yellow: 40, blue: 85 },
    { month: 'October', yellow: 58, blue: 15 },
    { month: 'November', yellow: 8, blue: 75 },
    { month: 'December', yellow: 20, blue: 35 },
];


export default function RevenueChart() {
    return (
        <div className="bg-white p-6 rounded-3xl relative w-[670px] h-[299px]">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-[20px] font-semibold text-blue-900">Revenue Overview</h2>
                <button className="flex items-center gap-2 border border-blue-900 text-blue-900 px-4 py-2 rounded-2xl text-[12px]">
                    For every month
                    <Image src="/Vector 1.png" alt="Vector Logo" width={12} height={12} priority />
                </button>

            </div>

            {/* Annotation: Fall in revenue */}
            <div className="absolute left-[170px] top-[90px] bg-red-700 text-white text-[12px] px-4 py-2 rounded-md font-medium shadow-md z-10 w-[108px] h-[40px] whitespace-nowrap justify-center flex items-center">
                A fall in revenue
            </div>

            {/* Annotation: Rise in revenue */}
            <div className="absolute left-[400px] top-[80px] bg-green-700 text-white text-[12px] px-4 py-2 rounded-md font-medium shadow-md z-10 w-[108px] h-[40px] whitespace-nowrap justify-center flex items-center">
                A rise in revenue
            </div>


            <ResponsiveContainer width="100%" height="90%">
                <BarChart data={data} barGap={10}>
                    <CartesianGrid stroke="#ccc" strokeDasharray="0" />
                    <XAxis
                        dataKey="month"
                        stroke="#0a0a55"
                        interval={0}
                        tick={{ fontSize: 10 }}
                    />

                    <YAxis stroke="#0a0a55" />
                    <Tooltip />
                    <Bar dataKey="yellow" fill="yellow" />
                    <Bar dataKey="blue" fill="royalblue" />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
}
