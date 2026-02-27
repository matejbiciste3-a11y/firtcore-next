import { useEffect, useState, useRef } from 'react'

export default function AnimatedCounter({ value, suffix = '', duration = 1500, inView }) {
    const [count, setCount] = useState(0)
    const rafRef = useRef(null)

    useEffect(() => {
        if (!inView) return

        const start = performance.now()
        const end = value

        const update = (now) => {
            const elapsed = now - start
            const progress = Math.min(elapsed / duration, 1)
            // ease-out cubic
            const eased = 1 - Math.pow(1 - progress, 3)
            setCount(eased * end)

            if (progress < 1) {
                rafRef.current = requestAnimationFrame(update)
            }
        }

        rafRef.current = requestAnimationFrame(update)

        return () => {
            if (rafRef.current) cancelAnimationFrame(rafRef.current)
        }
    }, [value, duration, inView])

    const display = Number.isInteger(value)
        ? Math.round(count)
        : count.toFixed(2)

    return (
        <span>{display}{suffix}</span>
    )
}