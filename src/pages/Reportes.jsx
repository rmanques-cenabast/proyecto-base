import React from 'react'
import Breadcrumb from '../components/ui/Breadcrumb'

export default function Reportes() {
  const breadcrumbItems = [
    { label: 'Inicio', current: false },
    { label: 'Reportes', current: true }
  ]

  return (
    <div className="p-[14px_24px_24px_24px]">
      <Breadcrumb items={breadcrumbItems} />
      <h1 className="w-[1044px] min-w-[155.5px] h-9 font-display font-semibold text-2xl leading-9 text-accent m-0">
        Reportes
      </h1>
    </div>
  )
}
