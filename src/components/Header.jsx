import React, { useState, useRef, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import SearchInput from './ui/SearchInput'
import Button from './ui/Button'
import UserAvatar from './ui/UserAvatar'

export default function Header({ userName = 'Nombre Apellido', userSub = '', userEmail = '' }) {
  const [open, setOpen] = useState(false)
  const menuRef = useRef(null)
  const navigate = useNavigate()

  useEffect(() => {
    function handleDocClick(e) {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpen(false)
      }
    }
    document.addEventListener('click', handleDocClick)
    return () => document.removeEventListener('click', handleDocClick)
  }, [])

  function handleLogout() {
    navigate('/logout')
  }

  return (
    <>
      <header className="bg-primary shadow-soft h-header flex items-center w-full z-[100] fixed top-0 left-0 right-0 overflow-visible">
        <div className="w-full flex items-center justify-between px-6 py-3 gap-10 overflow-visible">
          <div className="flex items-center gap-4 h-header">
            <div className="flex items-center h-header">
              <Link to="/">
                <img src="/Logo Cenabast.svg" alt="Cenabast" width="137" height="30" className="w-[137px] h-[30px] object-contain block" />
              </Link>
            </div>
            <div className="flex items-center justify-center px-4 py-0.5 gap-2.5 w-[190px] h-7 bg-success-light rounded-full">
              <div className="w-[158px] h-6 font-roboto font-semibold text-base leading-6 text-text-primary">Nombre del sistema</div>
            </div>
          </div>

          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex justify-center max-[900px]:static max-[900px]:transform-none max-[900px]:left-auto max-[900px]:top-auto max-[900px]:w-full max-[900px]:justify-center max-[900px]:px-2 max-[900px]:py-4">
            <div className="flex items-center gap-2 min-w-0 max-[900px]:w-full max-[900px]:max-w-full max-[900px]:gap-2">
              <SearchInput placeholder="Buscar" />
              <Button className="w-[68px] max-[900px]:w-[84px] max-[900px]:min-w-[84px]">
                Buscar
              </Button>
            </div>
          </div>

          <div className="box-border flex flex-row items-center pl-4 gap-3 h-9 w-[260px] border-l border-border max-[900px]:border-l-0 max-[900px]:pl-0 overflow-visible">
            <div className="flex flex-row items-center p-0 gap-2 h-9 w-48">
              <UserAvatar userName={userName} />
              <div className="flex flex-col items-start p-0 w-28 h-9">
                <div className="w-28 h-5 font-sans font-medium text-sm leading-5 text-white whitespace-nowrap overflow-hidden text-ellipsis">{userName}</div>
                {userEmail ? <div className="w-[107px] h-4 font-roboto font-normal text-xs leading-4 text-white whitespace-nowrap overflow-hidden text-ellipsis">{userEmail}</div> : null}
              </div>
            </div>

            <div className="relative ml-auto overflow-visible" ref={menuRef}>
              <Button
                variant="menu"
                onClick={(e) => { e.stopPropagation(); setOpen(v => !v) }}
                aria-label="Menú de usuario"
                aria-expanded={open}
              >
                <img src="/iconButton.svg" alt="Abrir menú" width="16" height="16" className="!w-4 !h-4 !max-w-4 !max-h-4 block" />
              </Button>

              {open && (
                <div className="fixed right-6 top-header bg-white rounded-button shadow-dropdown w-[180px] py-2 z-[9999]">
                  <button
                    onClick={handleLogout}
                    className="w-full text-left px-4 py-2.5 text-text-primary font-sans font-medium text-sm leading-5 hover:bg-primary hover:text-white transition-colors cursor-pointer border-0 bg-transparent block"
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
