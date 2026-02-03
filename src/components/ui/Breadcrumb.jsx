import React from 'react'

export default function Breadcrumb({ items = [] }) {
    return (
        <nav
            className="flex items-center gap-1 mb-8 overflow-x-auto whitespace-nowrap"
            aria-label="Breadcrumb"
        >
            {/* Home icon */}
            <div className="flex items-center p-1 pr-0 gap-1.5 h-7 rounded">
                <img src="/iconBreadcrumb.svg" alt="home" className="w-4 h-4 block" />
            </div>

            {/* Breadcrumb items */}
            {items.map((item, idx) => (
                <React.Fragment key={idx}>
                    <div className="w-4 h-4">
                        <img
                            src="/iconBreadcrumbArrow.svg"
                            alt=">"
                            className="w-4 h-4"
                            style={{ transform: 'none' }}
                        />
                    </div>
                    <div
                        className={`px-2 h-5 font-roboto text-sm leading-5 ${item.current
                                ? 'font-semibold text-text-primary min-w-[120px]'
                                : 'font-normal text-text-secondary min-w-[34px]'
                            }`}
                    >
                        {item.label}
                    </div>
                </React.Fragment>
            ))}
        </nav>
    )
}
