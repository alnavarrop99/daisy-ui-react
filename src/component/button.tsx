import { $ } from '@/helper'
import React, { createContext, useContext } from 'react'

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
  active?: boolean
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
  active = false,
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
            active: active,
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
export interface TButtonLoading {}

/* eslint-disable-next-line */
Button.Loading = function ({}: TButtonLoading) {
  /* eslint-disable-next-line */
  const loading = useContext(_loading)
  if (typeof loading !== 'undefined' && !loading) return
  return <span className="loading loading-spinner"></span>
}

/* eslint-disable-next-line */
interface TButtonGroupJoin {
  type?: 'join'
}

/* eslint-disable-next-line */
interface TButtonGroupNav {
  type?: 'nav'
  size?: 'lg' | 'sm' | 'xs' | 'md'
}

/* eslint-disable-next-line */
export type TButtonGroup = TButtonGroupNav | TButtonGroupJoin

/* eslint-disable-next-line */
Button.Group = function ({
  children,
  type = 'join',
  ...props
}: React.PropsWithChildren<TButtonGroup> &
  React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  >) {
  return (
    <div
      {...props}
      className={$.clcs([
        $.clco({
          'btm-nav': type === 'nav',
          join: type === 'join',
          'btm-nav-lg':
            type === 'nav' && (props as TButtonGroupNav)?.size === 'lg',
          'btm-nav-sm':
            type === 'nav' && (props as TButtonGroupNav)?.size === 'sm',
          'btm-nav-xs':
            type === 'nav' && (props as TButtonGroupNav)?.size === 'xs',
          'btm-nav-md':
            type === 'nav' && (props as TButtonGroupNav)?.size === 'md',
        }),
        props?.className,
      ])}
    >
      {children}
    </div>
  )
}

Button.Item = Button

export default Button
