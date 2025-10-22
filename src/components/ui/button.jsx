import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva } from "class-variance-authority"
import { cn } from "@/components/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all duration-200 ease-in-out disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500 dark:focus-visible:ring-blue-400",
  {
    variants: {
      variant: {
        default:
          "bg-gradient-to-r from-blue-600 to-indigo-700 text-white shadow-md hover:from-blue-500 hover:to-indigo-600 active:scale-[0.98]",
        destructive:
          "bg-red-600 text-white hover:bg-red-500 focus-visible:ring-red-500",
        outline:
          "border border-gray-700 text-gray-200 hover:bg-gray-800 hover:text-white",
        secondary:
          "bg-neutral-800 text-gray-200 hover:bg-neutral-700 hover:text-white",
        ghost:
          "hover:bg-neutral-800 text-gray-300 hover:text-white",
        link: "text-blue-400 underline-offset-4 hover:underline",
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 px-3 text-sm",
        lg: "h-10 px-6 text-base",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({ className, variant, size, asChild = false, ...props }) {
  const Comp = asChild ? Slot : "button"
  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
