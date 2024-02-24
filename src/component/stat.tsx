import { $ } from '@/helper'
import React from 'react'
import Button, { TButton } from './button'

/* eslint-disable-next-line */
export interface TStat {}

/* eslint-disable-next-line */
export function Stat({
  children,
  ...props
}: React.PropsWithChildren<TStat> &
  React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  >) {
  return (
    <div
      {...props}
      className={$.clcs(['stat inline-grid w-fit', props?.className])}
    >
      {children}
    </div>
  )
}

/* eslint-disable-next-line */
export interface TStatTitle {}

/* eslint-disable-next-line */
Stat.Title = function ({
  children,
  ...props
}: React.PropsWithChildren<TStatTitle> &
  React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  >) {
  return (
    <div {...props} className={$.clcs(['stat-title', props?.className])}>
      {children}
    </div>
  )
}

/* eslint-disable-next-line */
export interface TStatValue {}

/* eslint-disable-next-line */
Stat.Value = function ({
  children,
  ...props
}: React.PropsWithChildren<TStatDescp> &
  React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  >) {
  return (
    <div {...props} className={$.clcs(['stat-value', props?.className])}>
      {children}
    </div>
  )
}

/* eslint-disable-next-line */
export interface TStatDescp {}

/* eslint-disable-next-line */
Stat.Descp = function ({
  children,
  ...props
}: React.PropsWithChildren<TStatDescp> &
  React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  >) {
  return (
    <div {...props} className={$.clcs(['stat-desc', props?.className])}>
      {children}
    </div>
  )
}

/* eslint-disable-next-line */
export interface TStatButton {}

/* eslint-disable-next-line */
Stat.Button = function ({
  children,
  ...props
}: React.PropsWithChildren<TButton & TStatButton> &
  React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >) {
  return (
    <div className={$.clcs(['stat-actions'])}>
      <Button {...props}> {children} </Button>
    </div>
  )
}

/* eslint-disable-next-line */
export interface TStatImg {}

/* eslint-disable-next-line */
Stat.Img = function ({
  children,
  ...props
}: React.PropsWithChildren<TStatImg> &
  React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  >) {
  return (
    <div {...props} className={$.clcs(['stat-figure', props?.className])}>
      {children}
    </div>
  )
}

/* eslint-disable-next-line */
export interface TStatGroup {
  direction?: 'vertical' | 'horizontal'
}

/* eslint-disable-next-line */
Stat.Group = function ({
  children,
  direction = 'horizontal',
  ...props
}: React.PropsWithChildren<TStatGroup> &
  React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  >) {
  return (
    <div
      {...props}
      className={$.clcs([
        'stats',
        $.clco({
          'stats-vertical': direction === 'vertical',
        }),
        props?.className,
      ])}
    >
      {children}
    </div>
  )
}

/* eslint-disable-next-line */
Stat.Item = Stat

export default Stat
