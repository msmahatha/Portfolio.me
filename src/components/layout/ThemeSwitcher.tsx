
"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useIsMounted } from "@/hooks/useIsMounted"
import { Skeleton } from "@/components/ui/skeleton"

export function ThemeSwitcher() {
  const { setTheme, theme } = useTheme()
  const isMounted = useIsMounted()

  if (!isMounted) {
    return <Skeleton className="w-10 h-10 rounded-md" />
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon">
           {theme === 'dark' || theme === 'purple' ? (
             <Moon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all" />
           ) : (
             <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all" />
           )}
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("purple")}>
          Purple
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
