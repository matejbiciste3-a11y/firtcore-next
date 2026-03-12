import Link from 'next/link'
import Image from 'next/image'
import clsx from 'clsx'
import { useTheme } from '@/hooks/useTheme'

export default function Logo({ className, showText = true, size = 40 }) {
    const { theme } = useTheme()
    
    const logoSrc = '/images/firtcore-web-rem.png'
    
    return (
        <div className={clsx("flex items-center gap-3", className)}>
            <div 
                className="relative flex items-center justify-center"
                style={{ width: size, height: size }}
            >
                <Image
                    src={logoSrc}
                    alt="FirtCore.cz logo"
                    width={size}
                    height={size}
                    className="object-contain"
                    priority
                />
            </div>
            
            {showText && (
                <span className="text-xl font-extrabold tracking-tight">
                    FirtCore<span className="text-primary">.cz</span>
                </span>
            )}
        </div>
    )
}