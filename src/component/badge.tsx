import { $ } from '@/helper'
import React from 'react'

/* eslint-disable-next-line */
export interface TBadge {
  status?: 'info' | 'success' | 'warning' | 'error'
  outline?: boolean
  size?: 'lg' | 'sm' | 'xs' | 'md'
}

/* eslint-disable-next-line */
export function Badge({
  children,
  status,
  outline = false,
  size = 'md',
  ...props
}: React.PropsWithChildren<TBadge> &
  React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLSpanElement>,
    HTMLSpanElement
  >) {
  return (
    <span
      {...props}
      className={$.clcs([
        'badge',
        $.clco({
          'badge-info': status === 'info',
          'badge-success': status === 'success',
          'badge-error': status === 'error',
          'badge-warning': status === 'warning',
          'badge-outline': outline,
          'badge-lg': size === 'lg',
          'badge-sm': size === 'sm',
          'badge-xs': size === 'xs',
        }),
        props?.className,
      ])}
    >
      {children}
    </span>
  )
}
export default Badge
