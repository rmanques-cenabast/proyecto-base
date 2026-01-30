import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { SIDEBAR_ITEMS } from '../data/sidebarItems'

function slugify(input){
  return input
    .toLowerCase()
    .normalize('NFD')
    .replace(/\p{Diacritic}/gu, '')
    .replace(/[^a-z0-9\s-]/g,'')
    .trim()
    .replace(/\s+/g,'-')
}

const PATH_OVERRIDES = {
  'Inicio': '/',
  'Manuales y Documentación': '/manuales',
  'Manuales': '/manuales',
}

function SidebarItem({ icon, label, to }){
  return (
    <Link to={to} className="flex flex-row items-center px-3 py-2 gap-1.5 w-sidebar-item h-sidebar-item-h rounded-lg cursor-pointer no-underline">
      <div className="w-4 h-4">{icon}</div>
      <div className="flex-1 min-w-0 max-w-[200px] h-6 font-roboto text-white text-base leading-6 overflow-hidden text-ellipsis whitespace-nowrap">{label}</div>
    </Link>
  )
}

function Dropdown({ icon, label, children }){
  const [open, setOpen] = useState(false)
  return (
    <div>
      <div className="flex flex-row items-center px-3 py-2 gap-1.5 w-sidebar-item h-sidebar-item-h rounded-lg cursor-pointer" onClick={() => setOpen(v => !v)} aria-expanded={open}>
        <div className="w-4 h-4">{icon}</div>
        <div className="flex-1 min-w-0 max-w-[200px] h-6 font-roboto text-white text-base leading-6 overflow-hidden text-ellipsis whitespace-nowrap">{label}</div>
        <div className="flex items-center ml-1">
          <img src="/iconSideButton.svg" alt={open ? "collapse" : "expand"} width="16" height="16" className={`w-4 h-4 max-w-4 max-h-4 block transition-transform duration-180 ease-in-out ${open ? 'rotate-0' : 'rotate-180'}`} />
        </div>
      </div>
      {open && <div className="flex flex-col items-start pl-6 gap-1 w-sidebar-item h-dropdown-h">{children}</div>}
    </div>
  )
}

export default function Sidebar(){
  return (
    <aside className="box-border flex flex-col items-start py-4 px-0 gap-2 w-sidebar min-h-screen bg-primary-dark border-r border-border fixed left-0 top-header bottom-0">
      <div className="flex flex-col items-start p-2 gap-1.5 w-sidebar">
        <div className="flex flex-col items-start p-0 gap-1.5 w-sidebar-item">
          {SIDEBAR_ITEMS.map((it, idx) => {
            if(it.type === 'item'){
              // map labels to routes, remove accents and produce kebab-case
              const to = PATH_OVERRIDES[it.label] || ('/' + slugify(it.label))
              return <SidebarItem key={idx} icon={<img src={it.icon} alt={it.label} width="16" height="16" />} label={it.label} to={to} />
            }
            if(it.type === 'dropdown') return (
              <Dropdown key={idx} icon={<img src={it.icon} alt={it.label} width="16" height="16" />} label={it.label}>
                {it.children.map((c,ci)=> {
                  const slug = slugify(c)
                  return <Link key={ci} to={`/gestion/${slug}`} className="flex flex-row items-start px-3 py-2 gap-2 w-dropdown-item h-9 rounded-lg text-white font-roboto text-sm leading-5 no-underline">{c}</Link>
                })}
              </Dropdown>
            )
            return null
          })}
        </div>
      </div>
    </aside>
  )
}
