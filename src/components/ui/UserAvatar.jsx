import React from 'react'

export default function UserAvatar({ userName = '' }) {
    const initials = (userName || '')
        .split(' ')
        .filter(Boolean)
        .map(n => n[0])
        .slice(0, 2)
        .join('')
        .toUpperCase()

    return (
        <div className="flex flex-col justify-center items-center p-0 w-8 h-8 bg-primary rounded-full text-white font-medium">
            <span className="w-[21px] h-5 font-sans font-medium text-sm leading-5 text-center text-white">
                {initials}
            </span>
        </div>
    )
}
