import { $ } from '@/helper'
import React, { Children, createContext, useContext } from 'react'

/* eslint-disable-next-line */
export interface TMenu {
  direction?: 'horizontal' | 'vertical'
  size?: 'lg' | 'sm' | 'xs' | 'md'
}

/* eslint-disable-next-line */
export function Menu({
  children,
  direction,
  size,
  ...props
}: React.PropsWithChildren<TMenu> &
  React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLUListElement>,
    HTMLUListElement
  >) {
  return (
    <ul
      {...props}
      className={$.clcs([
        'menu inline-flex',
        $.clco({
          'menu-horizontal': direction === 'horizontal',
          'menu-vertical': direction === 'vertical',
          'menu-xs': size === 'xs',
          'menu-md': size === 'md',
          'menu-sm': size === 'sm',
          'menu-lg': size === 'lg',
        }),
        props?.className,
      ])}
    >
      {children}
    </ul>
  )
}

/* eslint-disable-next-line */
export interface TMenuItem {
  disabled?: boolean
  active?: boolean
  focus?: boolean
}

/* eslint-disable-next-line */
Menu.Item = function ({
  children,
  active = false,
  disabled = false,
  focus = false,
  ...props
}: React.PropsWithChildren<TMenuItem> &
  React.DetailedHTMLProps<
    React.LiHTMLAttributes<HTMLLIElement>,
    HTMLLIElement
  >) {
  return (
    <li
      {...props}
      className={$.clcs([
        $.clco({
          disabled: disabled,
          active: active,
          focus: focus,
        }),
        props?.className,
      ])}
    >
      <span>{children}</span>
    </li>
  )
}

/* eslint-disable-next-line */
export interface TMenuTitle {
  sub?: boolean
}

const _collapsible = createContext<boolean | undefined>(undefined)

/* eslint-disable-next-line */
Menu.Title = function ({
  children,
  sub = false,
  ...props
}: React.PropsWithChildren<TMenuTitle> &
  React.DetailedHTMLProps<
    React.LiHTMLAttributes<HTMLLIElement>,
    HTMLLIElement
  >) {
  /* eslint-disable-next-line */
  const collapsible = useContext(_collapsible)

  if (!!collapsible && sub) {
    return children
  }

  return (
    <li
      {...props}
      className={$.clcs([
        $.clco({
          'menu-title': !sub,
        }),
        props?.className,
      ])}
    >
      {children}
    </li>
  )
}

/* eslint-disable-next-line */
export interface TMenuGroup {
  collapsible?: boolean
  open?: boolean
}

/* eslint-disable-next-line */
Menu.Group = function ({
  children,
  collapsible = false,
  open = true,
  ...props
}: React.PropsWithChildren<TMenuGroup> &
  React.DetailedHTMLProps<
    React.LiHTMLAttributes<HTMLLIElement>,
    HTMLLIElement
  >) {
  if (collapsible) {
    return (
      <_collapsible.Provider value={collapsible}>
        <li {...props}>
          <details open={open}>
            <summary> {Children.toArray(children)?.at(0)} </summary>
            <ul>
              {Children.toArray(children)
                ?.slice(1)
                .map((child) => child)}
            </ul>
          </details>
        </li>
      </_collapsible.Provider>
    )
  }
  return (
    <li {...props}>
      {Children.toArray(children)?.at(0)}
      <ul>
        {Children.toArray(children)
          ?.slice(1)
          .map((child) => child)}
      </ul>
    </li>
  )
}

export default Menu
