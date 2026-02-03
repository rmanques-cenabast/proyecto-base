import React from 'react'

export default function Card({ icon, title, description, children, className = '' }) {
    return (
        <div className={`box-border flex flex-col items-center p-0 w-card h-card-lg bg-white border border-border rounded-card ${className}`}>
            <div className="p-6 flex flex-col items-center w-full">
                {icon && (
                    <div className="w-icon-lg h-icon-lg mb-4 flex items-center justify-center">
                        {icon}
                    </div>
                )}

                {title && (
                    <h3 className="text-lg font-semibold text-text-primary mb-2 text-center">
                        {title}
                    </h3>
                )}

                {description && (
                    <p className="text-sm text-text-secondary text-center mb-4">
                        {description}
                    </p>
                )}

                {children}
            </div>
        </div>
    )
}
