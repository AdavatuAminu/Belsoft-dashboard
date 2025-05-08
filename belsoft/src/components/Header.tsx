/* components/Header.tsx */
export default function Header() {
    return (
      <header className="flex justify-between items-center p-6 bg-white shadow">
        <div className="flex space-x-2">
          <input type="text" placeholder="Search" className="p-2 rounded border" />
          <select className="p-2 rounded border">
            <option>Sort by</option>
          </select>
        </div>
      </header>
    )
  }