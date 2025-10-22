import { useState, useEffect } from "react"

export default function ApiData() {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts?_limit=5")
      .then((res) => res.json())
      .then((data) => {
        setData(data)
        setLoading(false)
      })
      .catch((err) => {
        setError(err.message)
        setLoading(false)
      })
  }, [])

  if (loading) return <p className="text-center py-10 text-gray-400">Loading API Data...</p>
  if (error) return <p className="text-center text-red-500 py-10">Error: {error}</p>

  return (
    <div className="py-10 px-6">
      <h2 className="text-2xl font-semibold mb-6 text-center">API Data</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {data.map((item) => (
          <div key={item.id} className="bg-neutral-900 border border-gray-800 p-6 rounded-lg shadow">
            <h3 className="text-lg font-bold mb-2">{item.title}</h3>
            <p className="text-gray-400 text-sm">{item.body}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
