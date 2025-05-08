export default function JobOversight() {
    return (
      <section className="bg-white p-4 rounded shadow">
        <h2 className="text-xl font-semibold mb-2">Job Oversight</h2>
        <div className="flex space-x-2 mb-4">
          <input type="text" placeholder="Search for Jobs" className="p-2 rounded border w-full" />
          <select className="p-2 rounded border">
            <option>Date</option>
            <option>Last 1 day</option>
            <option>Last 2 weeks</option>
            <option>Last 5 months</option>
          </select>
          <select className="p-2 rounded border">
            <option>Jobs</option>
            <option>Technological jobs</option>
            <option>Business jobs</option>
            <option>Handy jobs</option>
            <option>Scientific jobs</option>
          </select>
        </div>
        <div className="space-y-4">
          <div>
            <span className="text-green-500">•</span> <strong>Mack Zuckerberg</strong>
            <p>Install Security Cameras for TechHub</p>
            <p>Budget: N4000</p>
            <p>Lagos, Nigeria <span>❤️</span></p>
          </div>
          <div>
            <span className="text-green-500">•</span> <strong>Mack Zuckerberg</strong>
            <p>Install Security Cameras for TechHub</p>
            <p>Budget: N4000</p>
            <p>Lagos, Nigeria <span>❤️</span></p>
          </div>
        </div>
      </section>
    )
  }