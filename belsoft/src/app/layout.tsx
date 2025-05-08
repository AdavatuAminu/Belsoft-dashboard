/* app/layout.tsx */
import './globals.css'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="flex h-screen bg-gray-100">
        <div className="flex-1 flex flex-col">
          {children}
        </div>
      </body>
    </html>
  )
}