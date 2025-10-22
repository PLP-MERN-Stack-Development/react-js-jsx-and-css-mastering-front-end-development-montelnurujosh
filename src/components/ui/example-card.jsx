import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export function ExampleCard() {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 200, damping: 15 }}
      className="w-full max-w-[350px] mx-auto"
    >
      <Card className="bg-neutral-900 text-white border border-gray-800 shadow-md hover:shadow-lg transition-all duration-300 rounded-2xl">
        <CardHeader>
          <CardTitle className="text-xl font-bold text-blue-400">
            React Mastery
          </CardTitle>
          <CardDescription className="text-gray-400">
            Level up with JSX & Tailwind
          </CardDescription>
        </CardHeader>

        <CardContent>
          <p className="text-sm text-gray-300 leading-relaxed">
            Build reusable components, master state management, and design clean
            modern UIs. This is your first step to being a full-stack beast. ⚡
          </p>
        </CardContent>

        <CardFooter>
          <Button className="bg-blue-600 hover:bg-blue-500 text-white font-semibold transition">
            Get Started
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  )
}
