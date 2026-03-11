import React from 'react'
import { motion } from 'framer-motion'
import clsx from 'clsx'
import { Icons } from './Icons'

export default function Card({ icon, title, description, children, variant = 'default', className }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className={clsx(
                "group relative p-8 rounded-2xl transition-all border-trace h-full flex flex-col",
                variant === 'enterprise' ? "glass-morphism-v2" : "glass-morphism-v2",
                className
            )}
        >
            <div className="noise-overlay opacity-[0.02]"></div>
            <div className="relative z-10 flex-1">
                {icon && (
                    <div className="w-12 h-12 rounded-xl bg-brand/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                        {typeof icon === 'string' ? (
                            <div className="w-6 h-6 text-brand">
                                {Icons[icon.charAt(0).toUpperCase() + icon.slice(1)] ? (
                                    React.createElement(Icons[icon.charAt(0).toUpperCase() + icon.slice(1)], { className: "w-full h-full" })
                                ) : (
                                    <Icons.Zap className="w-full h-full" />
                                )}
                            </div>
                        ) : (
                            <div className="w-6 h-6 text-brand">{icon}</div>
                        )}
                    </div>
                )}
                <h3 className="text-xl font-bold mb-3 group-hover:text-brand transition-colors">{title}</h3>
                <p className="text-muted-foreground leading-relaxed">{description}</p>
                {children}
            </div>
        </motion.div>
    )
}