'use client'

import * as React from 'react'
import { useState } from 'react'
import { MoonIcon, SunIcon } from 'lucide-react'

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

import { Button } from '@/components/ui/button'
import { useTheme } from '..'
import type { Theme } from './types'
import { themeLocalStorageKey } from './types'

type Variant = 'select' | 'dropdown'

interface ThemeSwitcherProps {
  variant?: Variant
}

export const ThemeSwitcher: React.FC<ThemeSwitcherProps> = ({ variant = 'select' }) => {
  const { setTheme } = useTheme()
  const [value, setValue] = useState('')

  const onThemeChange = (themeToSet: Theme | 'auto') => {
    if (themeToSet === 'auto') {
      setTheme(null)
      setValue('auto')
    } else {
      setTheme(themeToSet)
      setValue(themeToSet)
    }
  }

  React.useEffect(() => {
    const preference = window.localStorage.getItem(themeLocalStorageKey)
    setValue(preference ?? 'auto')
  }, [])

  // -------------------------
  // SELECT VARIANT
  // -------------------------
  if (variant === 'select') {
    return (
      <Select value={value} onValueChange={onThemeChange}>
        <SelectTrigger
          aria-label="Select a theme"
          className="w-auto bg-transparent gap-2 pl-0 md:pl-3 border-none"
        >
          <SelectValue placeholder="Theme" />
        </SelectTrigger>

        <SelectContent>
          <SelectItem value="auto">Auto</SelectItem>
          <SelectItem value="light">Light</SelectItem>
          <SelectItem value="dark">Dark</SelectItem>
        </SelectContent>
      </Select>
    )
  }

  // -------------------------
  // DROPDOWN VARIANT
  // -------------------------
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent>
        {(['auto', 'light', 'dark'] as const).map((theme) => (
          <DropdownMenuItem
            key={theme}
            onClick={() => onThemeChange(theme)}
            className={value === theme ? 'bg-accent' : ''}
          >
            {theme.charAt(0).toUpperCase() + theme.slice(1)}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
