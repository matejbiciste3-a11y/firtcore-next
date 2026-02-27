import { useEffect, useState } from 'react'

export function useCountUp(end, duration = 2000, startOnView = true) {
    const [count, setCount] = useState(0)
    const [inView, setInView] = useState(false)

    useEffect(() => {
        if (!startOnView || inView) {
            let start = 0
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
        }
    }, [end, duration, startOnView, inView])

    return [count, setInView]
}