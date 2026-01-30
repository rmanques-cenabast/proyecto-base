import React, { useState, useRef, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Avatar, SearchInput, Badge } from './ui'

export default function Header({ userName = 'Nombre Apellido', userSub = '', userEmail = '' }){
  const [open, setOpen] = useState(false)
  const menuRef = useRef(null)
  const navigate = useNavigate()

  useEffect(()=>{
    function handleDocClick(e){
      if(menuRef.current && !menuRef.current.contains(e.target)){
        setOpen(false)
      }
    }
    document.addEventListener('click', handleDocClick)
    return () => document.removeEventListener('click', handleDocClick)
  }, [])

  function handleLogout(){
    navigate('/logout')
  }

  return (
    <>
    <header className="bg-primary shadow-soft h-[60px] flex items-center w-full z-[100] fixed top-0 left-0 right-0 overflow-visible">
      <div className="w-full flex items-center justify-between px-[24px] py-[12px] gap-[40px] overflow-visible">
        <div className="flex items-center gap-[16px] h-[60px]">
          <div className="flex items-center h-[60px]">
            <Link to="/">
              <img src="/Logo Cenabast.svg" alt="Cenabast" width="137" height="30" className="w-[137px] h-[30px] object-contain block" />
            </Link>
          </div>
          <Badge variant="primary" className="w-[190px] h-[28px] flex items-center justify-center">
            <div className="w-[158px] h-[24px] font-roboto font-semibold text-[16px] leading-[24px]">Nombre del sistema</div>
          </Badge>
        </div>

        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex justify-center max-[900px]:static max-[900px]:transform-none max-[900px]:left-auto max-[900px]:top-auto max-[900px]:w-full max-[900px]:justify-center max-[900px]:px-[8px] max-[900px]:py-[16px]">
          <SearchInput className="max-[900px]:w-full max-[900px]:max-w-full max-[900px]:gap-[8px]" />
        </div>

        <div className="box-border flex flex-row items-center pl-[16px] gap-[12px] h-[36px] w-[260px] border-l border-border max-[900px]:border-l-0 max-[900px]:pl-0 overflow-visible">
          <div className="flex flex-row items-center p-0 gap-[8px] h-[36px] w-[192px]">
            <Avatar name={userName} size="md" />
            <div className="flex flex-col items-start p-0 w-[112px] h-[36px]">
              <div className="w-[112px] h-[20px] font-sans font-medium text-[14px] leading-[20px] text-white whitespace-nowrap overflow-hidden text-ellipsis">{userName}</div>
              {userEmail ? <div className="w-[107px] h-[16px] font-roboto font-normal text-[12px] leading-[16px] text-white whitespace-nowrap overflow-hidden text-ellipsis">{userEmail}</div> : null}
            </div>
          </div>

          <div className="relative ml-auto overflow-visible" ref={menuRef}>
            <button 
              className="flex flex-row justify-center items-center p-0 w-[36px] h-[36px] rounded-full bg-transparent border-0 text-white cursor-pointer hover:bg-white/10 transition-colors" 
              onClick={(e)=>{e.stopPropagation(); setOpen(v=>!v)}}
              aria-label="Menú de usuario"
              aria-expanded={open}
            >
              <img src="/iconButton.svg" alt="Abrir menú" width="16" height="16" className="!w-[16px] !h-[16px] !max-w-[16px] !max-h-[16px] block" />
            </button>

            {open && (
              <div className="fixed right-[24px] top-[60px] bg-white rounded-[8px] shadow-dropdown w-[180px] py-[8px] z-[9999]">
                <button
                  onClick={handleLogout}
                  className="w-full text-left px-[16px] py-[10px] text-text-primary font-sans font-medium text-[14px] leading-[20px] hover:bg-primary hover:text-white transition-colors cursor-pointer border-0 bg-transparent block"
                >
                  Cerrar sesión
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
    
    </>
  )
}
