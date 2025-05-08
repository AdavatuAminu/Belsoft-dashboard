export default function AccountManagement() {
    return (
      <section className="bg-white p-4 rounded shadow">
        <h2 className="text-xl font-semibold mb-2">Account Management</h2>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>#CCC45</div>
            <div>Patrick James</div>
            <div>Professional</div>
            <div className="text-red-500">Deactivated</div>
            <button className="bg-green-500 text-white px-2 py-1 rounded">Activate</button>
          </div>
          <div className="flex items-center justify-between">
            <div>#CCC45</div>
            <div>Patrick James</div>
            <div>Professional</div>
            <div className="text-green-500">Activated</div>
            <button className="bg-red-500 text-white px-2 py-1 rounded">Deactivate</button>
          </div>
          <div className="flex items-center justify-between">
            <div>#CCC45</div>
            <div>Patrick James</div>
            <div>Professional</div>
            <div className="text-green-500">Activated</div>
            <button className="bg-red-500 text-white px-2 py-1 rounded">Deactivate</button>
          </div>
        </div>
      </section>
    )
  }