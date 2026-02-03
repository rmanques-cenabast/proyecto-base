import React from 'react'

export default function Button({
    variant = 'primary',
    children,
    onClick,
    className = '',
    ...props
}) {
    const variants = {
        primary: 'btn-primary',
        menu: 'btn-menu',
    }

    return (
        <button
            className={`${variants[variant] || variants.primary} ${className}`}
            onClick={onClick}
            {...props}
        >
            {children}
        </button>
    )
}
