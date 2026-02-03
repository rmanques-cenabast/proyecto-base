import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Logout() {
  const navigate = useNavigate()

  return (
    <div
      className="fixed inset-0 w-screen h-screen flex items-center justify-center z-[9999]"
      style={{ backgroundColor: 'var(--color-primary)' }}
    >
      <div className="flex flex-col items-center gap-5 w-[306px] h-[334px]">
        {/* Check icon */}
        <div className="w-[194px] h-[194px] flex items-center justify-center overflow-hidden">
          <img
            src="/iconCheck.svg"
            alt="check"
            className="w-full h-full object-contain block"
          />
        </div>

        {/* Title */}
        <h1
          className="w-[306px] h-[52px] font-display font-semibold text-4xl leading-[52px] flex items-center justify-center text-center m-0"
          style={{ color: 'var(--color-success-light)' }}
        >
          Sesión cerrada
        </h1>

        {/* Button */}
        <button
          className="flex items-center justify-center px-4 py-2 gap-2 w-[217px] h-12 border-0 cursor-pointer font-roboto font-bold text-base text-white active:translate-y-px"
          style={{
            backgroundColor: 'var(--color-accent)',
            boxShadow: 'var(--shadow-soft)'
          }}
          onClick={() => navigate('/')}
        >
          Volver al inicio
        </button>
      </div>
    </div>
  )
}
