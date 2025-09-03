"use client"

import * as React from "react"
import { Moon, Sun, Palette } from "lucide-react"
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
  const { setTheme } = useTheme()
  const isMounted = useIsMounted()

  if (!isMounted) {
    return <Skeleton className="w-10 h-10 rounded-md" />
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon">
          <Palette className="h-[1.2rem] w-[1.2rem]" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("day")}>
          <Sun className="mr-2 h-4 w-4" />
          <span>Day</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("evening")}>
          <Moon className="mr-2 h-4 w-4" />
          <span>Evening</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          <Moon className="mr-2 h-4 w-4" />
          <span>Dark</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
