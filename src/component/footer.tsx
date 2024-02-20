import { useMemo } from 'react'

export interface TFooterProp {}

export const Footer = () => {
  const date = useMemo(() => new Date().getFullYear().valueOf(), [])
  return (
    <p aria-label="copyright" className="text-balance text-center italic">
      Todos los derechos reservados.{' '}
      <time className="font-bold not-italic">&copy; {date}</time>
    </p>
  )
}

export default Footer
