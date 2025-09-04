
"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { AnimatePresence, motion } from "framer-motion"

import { Button } from "@/components/ui/button"
import { useIsMounted } from "@/hooks/useIsMounted"
import { Skeleton } from "@/components/ui/skeleton"

export function ThemeSwitcher() {
  const { setTheme, theme, themes } = useTheme()
  const isMounted = useIsMounted()

  const cycleTheme = () => {
    const currentThemeIndex = themes.indexOf(theme ?? '');
    const nextThemeIndex = (currentThemeIndex + 1) % themes.length;
    setTheme(themes[nextThemeIndex] ?? 'dark');
  };

  if (!isMounted) {
    return <Skeleton className="w-10 h-10 rounded-full" />
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={cycleTheme}
      className="relative w-10 h-10 rounded-full overflow-hidden"
      aria-label="Toggle theme"
    >
      <AnimatePresence initial={false} mode="wait">
        <motion.div
          key={theme}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -20, opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="absolute"
        >
          {theme === 'dark' || theme === 'purple' ? (
            <Moon className="h-[1.2rem] w-[1.2rem]" />
          ) : (
            <Sun className="h-[1.2rem] w-[1.2rem]" />
          )}
        </motion.div>
      </AnimatePresence>
    </Button>
  )
}
