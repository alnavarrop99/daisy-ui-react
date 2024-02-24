import { $ } from '@/helper'
import { createContext, useContext } from 'react'

/* eslint-disable-next-line */
export interface TButton {
  link?: boolean
  status?: 'info' | 'success' | 'warning' | 'error'
  outline?: boolean
  size?: 'lg' | 'sm' | 'xs' | 'md'
  glass?: boolean
  area?: 'circle' | 'square'
  animation?: boolean
  loading?: boolean
}

const _loading = createContext<boolean | undefined>(false)

/* eslint-disable-next-line */
export function Button({
  children,
  link = false,
  status,
  outline = false,
  size = 'md',
  glass = false,
  area,
  animation = true,
  loading = false,
  ...props
}: React.PropsWithChildren<TButton> &
  React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >) {
  return (
    <_loading.Provider value={loading}>
      <button
        {...props}
        className={$.clcs([
          'btn',
          $.clco({
            'btn-link': link,
            'btn-info': status === 'info',
            'btn-success': status === 'success',
            'btn-error': status === 'error',
            'btn-warning': status === 'warning',
            'btn-outline': outline,
            'btn-lg': size === 'lg',
            'btn-sm': size === 'sm',
            'btn-xs': size === 'xs',
            glass: glass,
            'btn-circle': area === 'circle',
            'btn-square': area === 'square',
            'no-animation': !animation,
          }),
          props.className ?? '',
        ])}
      >
        {children}
      </button>
    </_loading.Provider>
  )
}

/* eslint-disable-next-line */
Button.Loading = function () {
  /* eslint-disable-next-line */
  const loading = useContext(_loading)
  if (typeof loading !== 'undefined' && !loading) return
  return <span className="loading loading-spinner"></span>
}

export default Button
