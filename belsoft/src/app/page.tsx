/* app/page.tsx */
import Header from '../components/Header'

export default function Home() {
  return (
    <>
      <Header />
      <main className="p-6">
      <h1 className="text-2xl font-bold">Overview</h1>
        <div className="grid grid-cols-2 gap-6 mt-6">
          Hello Doe
        </div>
      </main>
    </>
  )
}