'use client'

import { FiSun, FiMoon, FiRadio } from "react-icons/fi"
import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'

export function ThemeSwitch() {
    const [mounted, setMounted] = useState(false)
    const { setTheme, resolvedTheme } = useTheme()

    useEffect(() => setMounted(true), [])

    if (!mounted) return <FiRadio onClick={() => setTheme('light')} />

    if (resolvedTheme === 'dark') return <FiSun onClick={() => setTheme('light')} />

    if (resolvedTheme === 'light') return <FiMoon onClick={() => setTheme('dark')} />
}