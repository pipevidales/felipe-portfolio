import type { ReactNode } from "react"

type SectionTitleProps = {
  children: ReactNode
  glow?: boolean // difuminado azul detrás del título (activado por defecto)
}

// Título de sección reutilizable: líneas que se desvanecen hacia los bordes,
// título centrado y un resplandor azul suave detrás.
function SectionTitle({ children, glow = true }: SectionTitleProps) {
  return (
    <div className="relative isolate flex w-full items-center gap-6">

      {glow && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-32 w-80 -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(ellipse_at_center,rgba(37,99,235,0.20),transparent_70%)] md:w-[28rem]"
        />
      )}

      <div className="h-px flex-1 bg-gradient-to-r from-transparent to-blue-600" />
      <h2 className="whitespace-nowrap text-center text-3xl font-bold tracking-tight text-white md:text-4xl">
        {children}
      </h2>
      <div className="h-px flex-1 bg-gradient-to-l from-transparent to-blue-600" />

    </div>
  )
}

export default SectionTitle