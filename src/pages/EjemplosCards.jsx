import React from 'react'
import Card from '../components/ui/Card'
import Badge from '../components/ui/Badge'

/**
 * 🎯 PÁGINA DE EJEMPLOS - Demuestra la reutilización de componentes
 * 
 * Esta página muestra 10 ejemplos diferentes de cómo usar el componente Card
 * para demostrar su flexibilidad y escalabilidad
 */

export default function EjemplosCards() {
    return (
        <div className="p-5">
            <h1 className="font-display font-semibold text-2xl mb-2" style={{ color: 'var(--color-accent)' }}>
                Ejemplos de Reutilización - Componente Card
            </h1>
            <p className="text-sm mb-8" style={{ color: 'var(--color-text-secondary)' }}>
                El mismo componente Card, 10 diseños diferentes 🚀
            </p>

            <div className="grid gap-6" style={{ gridTemplateColumns: 'repeat(auto-fit, 332px)' }}>

                {/* ========== EJEMPLO 1: Card Básica ========== */}
                <Card
                    icon={
                        <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
                            <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="#00135A" strokeWidth="2" />
                        </svg>
                    }
                    title="Card Básica"
                    description="Icon + Título + Descripción"
                />

                {/* ========== EJEMPLO 2: Card con Estadísticas ========== */}
                <Card
                    icon={
                        <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
                            <circle cx="12" cy="12" r="3" stroke="#00135A" strokeWidth="2" />
                        </svg>
                    }
                    title="Con Estadísticas"
                    description="Usando children"
                >
                    <div className="mt-auto flex flex-col items-center gap-2">
                        <div className="flex items-center gap-2">
                            <span className="text-[32px] font-bold" style={{ color: 'var(--color-text-primary)' }}>
                                1,234
                            </span>
                            <Badge variant="success">+15%</Badge>
                        </div>
                    </div>
                </Card>

                {/* ========== EJEMPLO 3: Card Solo con Título ========== */}
                <Card
                    title="Sin Icono"
                    description="Puedes omitir cualquier prop que no necesites"
                >
                    <p className="text-sm mt-2" style={{ color: 'var(--color-text-secondary)' }}>
                        El componente es flexible
                    </p>
                </Card>

                {/* ========== EJEMPLO 4: Card con Múltiples Badges ========== */}
                <Card
                    icon={
                        <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
                            <path d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21" stroke="#00135A" strokeWidth="2" />
                        </svg>
                    }
                    title="Múltiples Badges"
                    description="Combinación de elementos"
                >
                    <div className="flex flex-wrap gap-2 mt-2 justify-center">
                        <Badge variant="success">Activo</Badge>
                        <Badge variant="primary">Premium</Badge>
                        <Badge variant="accent">Verificado</Badge>
                    </div>
                </Card>

                {/* ========== EJEMPLO 5: Card con Lista ========== */}
                <Card
                    icon={
                        <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
                            <path d="M9 11L12 14L22 4" stroke="#00135A" strokeWidth="2" />
                        </svg>
                    }
                    title="Con Lista"
                    className="!h-auto"
                >
                    <ul className="w-full mt-4 space-y-2 text-left">
                        <li className="text-sm flex items-center gap-2" style={{ color: 'var(--color-text-secondary)' }}>
                            ✓ Feature 1
                        </li>
                        <li className="text-sm flex items-center gap-2" style={{ color: 'var(--color-text-secondary)' }}>
                            ✓ Feature 2
                        </li>
                        <li className="text-sm flex items-center gap-2" style={{ color: 'var(--color-text-secondary)' }}>
                            ✓ Feature 3
                        </li>
                    </ul>
                </Card>

                {/* ========== EJEMPLO 6: Card con Botón ========== */}
                <Card
                    icon={
                        <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
                            <path d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z" stroke="#00135A" strokeWidth="2" />
                        </svg>
                    }
                    title="Con Acción"
                    description="Incluye un botón"
                >
                    <button className="btn-primary mt-4">
                        Descargar PDF
                    </button>
                </Card>

                {/* ========== EJEMPLO 7: Card con Fondo Personalizado ========== */}
                <Card
                    icon={
                        <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
                            <circle cx="12" cy="12" r="10" stroke="#00135A" strokeWidth="2" />
                            <path d="M12 6v6l4 2" stroke="#00135A" strokeWidth="2" />
                        </svg>
                    }
                    title="Fondo Personalizado"
                    description="Usando style prop"
                    className="!border-0"
                    style={{ backgroundColor: 'var(--color-success-light)' }}
                />

                {/* ========== EJEMPLO 8: Card Horizontal ========== */}
                <Card
                    className="!flex-row !h-auto !items-start !p-4"
                    title="Layout Horizontal"
                    description="Cambia flex-direction"
                >
                    <p className="text-xs mt-2" style={{ color: 'var(--color-text-secondary)' }}>
                        className="!flex-row"
                    </p>
                </Card>

                {/* ========== EJEMPLO 9: Card con Input ========== */}
                <Card
                    title="Con Formulario"
                    description="Cualquier JSX funciona"
                    className="!h-auto"
                >
                    <div className="w-full mt-4 space-y-2">
                        <input
                            type="text"
                            placeholder="Escribe algo..."
                            className="w-full p-2 border rounded text-sm"
                            style={{ borderColor: 'var(--color-border)' }}
                        />
                        <button className="btn-primary w-full">
                            Enviar
                        </button>
                    </div>
                </Card>

                {/* ========== EJEMPLO 10: Card Completamente Personalizada ========== */}
                <Card className="!h-auto">
                    <div className="flex flex-col items-center gap-3">
                        <div className="w-16 h-16 rounded-full flex items-center justify-center"
                            style={{ backgroundColor: 'var(--color-primary)' }}>
                            <span className="text-white text-2xl font-bold">JD</span>
                        </div>
                        <h3 className="text-lg font-semibold" style={{ color: 'var(--color-text-primary)' }}>
                            Juan Díaz
                        </h3>
                        <p className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>
                            Administrador
                        </p>
                        <div className="flex gap-2">
                            <Badge variant="success">Online</Badge>
                        </div>
                    </div>
                </Card>

            </div>

            {/* Sección de explicación */}
            <div className="mt-12 p-6 rounded-lg" style={{ backgroundColor: 'var(--color-success-light)' }}>
                <h2 className="text-xl font-semibold mb-4" style={{ color: 'var(--color-primary)' }}>
                    💡 ¿Cómo funciona?
                </h2>
                <p className="text-sm mb-2" style={{ color: 'var(--color-text-primary)' }}>
                    <strong>El mismo componente Card se reutiliza 10 veces diferentes</strong> usando:
                </p>
                <ul className="text-sm space-y-1 ml-4" style={{ color: 'var(--color-text-secondary)' }}>
                    <li>✓ Props opcionales (icon, title, description)</li>
                    <li>✓ Children para contenido personalizado</li>
                    <li>✓ className para sobrescribir estilos</li>
                    <li>✓ style para CSS personalizado</li>
                </ul>
                <p className="text-sm mt-4" style={{ color: 'var(--color-text-primary)' }}>
                    <strong>Resultado:</strong> Un componente = Diseños infinitos 🚀
                </p>
            </div>
        </div>
    )
}
