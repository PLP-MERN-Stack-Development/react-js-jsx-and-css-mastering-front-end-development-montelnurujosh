// src/pages/ApiData.jsx
import { useEffect, useState } from "react"

export default function ApiData() {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [search, setSearch] = useState("")

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts")
        if (!res.ok) throw new Error("Failed to fetch data")
        const data = await res.json()
        setPosts(data)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [])

  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="py-10 px-6 text-center text-white">
      <h2 className="text-3xl font-semibold mb-6">📡 API Data</h2>

      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search posts..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="mb-6 p-2 w-full max-w-md rounded-md border border-gray-600 bg-neutral-800 text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      {/* Loading State */}
      {loading && <p className="text-gray-400">Loading data...</p>}

      {/* Error State */}
      {error && <p className="text-red-400">{error}</p>}

      {/* Posts List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredPosts.slice(0, 12).map((post) => (
          <div
            key={post.id}
            className="bg-neutral-900 border border-gray-700 rounded-lg p-5 shadow-lg hover:scale-105 transition-transform duration-200"
          >
            <h3 className="text-xl font-bold mb-2 text-blue-400">{post.title}</h3>
            <p className="text-gray-300">{post.body}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
