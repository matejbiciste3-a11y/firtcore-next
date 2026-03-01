import { useEffect, useState } from 'react'
import Image from 'next/image'
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
                <div className="mb-8 flex flex-col items-center">
                    <Image
                        src="/images/firtcore-web.png"
                        alt="FirtCore.cz"
                        width={80}
                        height={80}
                        className="mb-4"
                        priority
                    />
                    <span className="text-2xl font-extrabold">
                        FirtCore<span className="text-primary">.cz</span>
                    </span>
                </div>
                <div className="loader-progress">
                    <div className="loader-bar"></div>
                </div>
            </div>
        </div>
    )
}