export default function GridBackground() {
    return (
        <div className="grid-bg">
            <svg aria-hidden="true" width="100%" height="100%">
                <defs>
                    <pattern id="grid" width="80" height="80" x="50%" y="-1" patternUnits="userSpaceOnUse">
                        <path
                            d="M.5 80V.5H80"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="0.5"
                            className="stroke-primary/20 dark:stroke-white/20 transition-colors duration-500"
                        />
                    </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
        </div>
    )
}