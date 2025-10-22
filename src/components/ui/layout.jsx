// src/components/ui/layout.jsx
import { Navbar } from "@/components/ui/navbar"
import { Footer } from "@/components/ui/footer"

export function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen bg-neutral-950 text-gray-200 transition-colors duration-300">
      <Navbar />
      <main className="flex-1 container mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {children}
      </main>
      <Footer />
    </div>
  )
}
