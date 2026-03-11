import clsx from 'clsx'

export default function Badge({
    children,
    variant = 'primary',
    size = 'medium',
    withDot = false,
    icon,
    className
}) {
    const variants = {
        primary: 'bg-brand/10 text-brand border-brand/20',
        success: 'bg-success/10 text-success border-success/30',
        warning: 'bg-warning/10 text-warning border-warning/30',
        purple: 'bg-purple/10 text-purple border-purple/30',
        orange: 'bg-orange/10 text-orange border-orange/30'
    }

    const sizes = {
        small: 'px-3 py-1 text-xs',
        medium: 'px-4 py-2 text-sm',
        large: 'px-6 py-3 text-base'
    }

    return (
        <span className={clsx(
            'inline-flex items-center gap-2 rounded-full border',
            variants[variant],
            sizes[size],
            className
        )}>
            {withDot && (
                <span className="relative flex h-2 w-2">
                    <span className="animate-ping-slow absolute inline-flex h-full w-full rounded-full bg-current opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-current"></span>
                </span>
            )}
            {icon && (
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    {icon === 'check' && <polyline points="20 6 9 17 4 12" />}
                </svg>
            )}
            {children}
        </span>
    )
}