import React from 'react'

export default function Badge({ children, variant = 'success', className = '' }) {
    const variants = {
        success: 'bg-success text-white',
        primary: 'bg-primary text-white',
        accent: 'bg-accent text-white',
    }

    return (
        <span className={`px-3 py-1 rounded-badge text-xs font-medium ${variants[variant]} ${className}`}>
            {children}
        </span>
    )
}
