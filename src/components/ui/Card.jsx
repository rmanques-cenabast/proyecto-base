import React from 'react'

export default function Card({ icon, title, description, children }) {
  return (
    <div className="box-border flex flex-col items-center p-0 w-[332px] h-[344px] min-h-[88px] bg-white border border-border rounded-[12px]">
      <div className="p-[24px] flex flex-col items-center w-full">
        <div className="w-[48px] h-[48px] mb-[16px] flex items-center justify-center">
          {icon}
        </div>
        <h3 className="text-[18px] font-semibold text-text-primary mb-[8px] text-center">{title}</h3>
        <p className="text-[14px] text-text-secondary text-center mb-[16px]">{description}</p>
        {children}
      </div>
    </div>
  )
}
