// src/App.jsx
import { Routes, Route } from "react-router-dom"
import { Layout } from "@/components/ui/layout"

// Pages
import ApiData from "@/pages/ApiData"
import Home from "@/pages/Home"
import About from "@/pages/About"
import Contact from "@/pages/Contact"

function App() {
  return (
    <Layout>
      <Routes>
        {/* Home Page */}
        <Route path="/" element={<Home />} />

        {/* About Page */}
        <Route path="/about" element={<About />} />

        {/* Contact Page */}
        <Route path="/contact" element={<Contact />} />

        {/* API Data Page */}
        <Route path="/ApiData" element={<ApiData />} />
      </Routes>
    </Layout>
  )
}

export default App
