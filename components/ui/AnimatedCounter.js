import { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'

export default function AnimatedCounter({ value, suffix = '', duration = 2000, inView }) {
    const [count, setCount] = useState(0)

    useEffect(() => {
        if (!inView) return

        let start = 0
        const end = value
        const increment = end / (duration / 16)
        let timer

        const updateCount = () => {
            start += increment
            if (start < end) {
                setCount(start)
                timer = setTimeout(updateCount, 16)
            } else {
                setCount(end)
            }
        }

        updateCount()

        return () => clearTimeout(timer)
    }, [value, duration, inView])

    return (
        <span>
            {typeof count === 'number' ? count.toFixed(2) : count}
            {suffix}
        </span>
    )
}