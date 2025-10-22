// src/pages/Home.jsx
import { ExampleCard } from "@/components/ui/example-card"
import { TaskManager } from "@/components/TaskManager"

export default function Home() {
  return (
    <div className="flex flex-col items-center py-10">
      {/* Example Cards */}
      <div className="flex flex-wrap justify-center gap-6 py-6">
        <ExampleCard />
        <ExampleCard />
        <ExampleCard />
      </div>

      {/* Task Manager Section */}
      <div className="py-10 w-full max-w-3xl">
        <TaskManager />
      </div>
    </div>
  )
}
