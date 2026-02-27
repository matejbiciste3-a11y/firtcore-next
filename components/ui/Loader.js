import { useEffect, useState } from 'react'
import Logo from './Logo'

export default function Loader() {
    const [isVisible, setIsVisible] = useState(true)

    useEffect(() => {
        const hasLoaded = sessionStorage.getItem('hasLoaded')
        if (hasLoaded) {
            setIsVisible(false)
            return
        }

        const timer = setTimeout(() => {
            setIsVisible(false)
            sessionStorage.setItem('hasLoaded', 'true')
        }, 2000)

        return () => clearTimeout(timer)
    }, [])

    if (!isVisible) return null

    return (
        <div id="loader" className="loader">
            <div className="loader-content">
                <Logo size={64} className="mb-8 flex-col text-2xl" />
                <div className="loader-progress">
                    <div className="loader-bar"></div>
                </div>
            </div>
        </div>
    )
}