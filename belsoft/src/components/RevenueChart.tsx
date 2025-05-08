export default function RevenueChart() {
    return (
      <section className="bg-white p-4 rounded shadow">
        <h2 className="text-xl font-semibold mb-2">Revenue Overview</h2>
        <div className="flex justify-center">
          <div className="w-full h-64 flex items-end justify-between">
            <div className="w-16 h-32 bg-yellow-400"></div>
            <div className="w-16 h-24 bg-blue-400"></div>
            <div className="w-16 h-28 bg-yellow-400"></div>
            <div className="w-16 h-20 bg-blue-400"></div>
            <div className="w-16 h-36 bg-yellow-400"></div>
            <div className="w-16 h-16 bg-blue-400"></div>
            <div className="w-16 h-12 bg-yellow-400"></div>
            <div className="w-16 h-40 bg-blue-400"></div>
            <div className="w-16 h-8 bg-yellow-400"></div>
            <div className="w-16 h-20 bg-blue-400"></div>
            <div className="w-16 h-16 bg-yellow-400"></div>
            <div className="w-16 h-32 bg-blue-400"></div>
          </div>
        </div>
        <div className="text-center">
          <span className="text-red-500">A fall in revenue</span>
          <span className="ml-2 text-green-500">A rise in revenue</span>
        </div>
      </section>
    )
  }