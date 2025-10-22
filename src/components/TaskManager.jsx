import { useState } from "react"
import { Button } from "@/components/ui/button"
import { useLocalStorage } from "@/hooks/useLocalStorage"

export function TaskManager() {
  const [tasks, setTasks] = useLocalStorage("tasks", [])
  const [newTask, setNewTask] = useState("")
  const [filter, setFilter] = useState("all")

  const addTask = () => {
    if (!newTask.trim()) return
    const task = { id: Date.now(), text: newTask, completed: false }
    setTasks([...tasks, task])
    setNewTask("")
  }

  const toggleComplete = (id) => {
    setTasks(tasks.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t)))
  }

  const deleteTask = (id) => {
    setTasks(tasks.filter((t) => t.id !== id))
  }

  const filteredTasks = tasks.filter((t) => {
    if (filter === "active") return !t.completed
    if (filter === "completed") return t.completed
    return true
  })

  return (
    <div className="max-w-lg mx-auto p-6 bg-white dark:bg-neutral-900 rounded-2xl shadow">
      <h2 className="text-2xl font-bold text-center mb-4 text-neutral-900 dark:text-white">
        Task Manager
      </h2>

      <div className="flex gap-2 mb-4">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Add a new task..."
          className="flex-1 px-3 py-2 border rounded-lg dark:bg-neutral-800 dark:text-white"
        />
        <Button onClick={addTask}>Add</Button>
      </div>

      <div className="flex justify-center gap-3 mb-4">
        <Button variant={filter === "all" ? "primary" : "secondary"} onClick={() => setFilter("all")}>
          All
        </Button>
        <Button variant={filter === "active" ? "primary" : "secondary"} onClick={() => setFilter("active")}>
          Active
        </Button>
        <Button
          variant={filter === "completed" ? "primary" : "secondary"}
          onClick={() => setFilter("completed")}
        >
          Completed
        </Button>
      </div>

      <ul className="space-y-2">
        {filteredTasks.map((t) => (
          <li
            key={t.id}
            className="flex justify-between items-center bg-neutral-100 dark:bg-neutral-800 px-3 py-2 rounded-lg"
          >
            <span
              onClick={() => toggleComplete(t.id)}
              className={`flex-1 cursor-pointer ${
                t.completed ? "line-through text-gray-400" : "text-gray-900 dark:text-white"
              }`}
            >
              {t.text}
            </span>
            <Button variant="danger" onClick={() => deleteTask(t.id)}>
              Delete
            </Button>
          </li>
        ))}
      </ul>
    </div>
  )
}
