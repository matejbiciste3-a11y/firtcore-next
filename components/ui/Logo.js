import { Icons } from './Icons'
import Link from 'next/link'
import clsx from 'clsx'

export default function Logo({ className, showText = true, size = 40 }) {
    return (
        <div className={clsx("flex items-center gap-3", className)}>
            <div
                className="relative flex items-center justify-center rounded-xl bg-primary/10 border border-primary/20 shadow-lg shadow-primary/5"
                style={{ width: size, height: size }}
            >
                <Icons.Zap className="w-2/3 h-2/3 text-primary animate-pulse" />
                <div className="absolute inset-0 bg-primary/20 blur-xl -z-10 rounded-full"></div>
            </div>
            {showText && (
                <span className="text-xl font-extrabold tracking-tight">
                    FirtCore<span className="text-primary">.cz</span>
                </span>
            )}
        </div>
    )
}
