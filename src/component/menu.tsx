import { $ } from '@/helper'
import React, { Children, createContext, useContext, useMemo } from 'react'

/* eslint-disable-next-line */
interface TItems {
  title?: TMenuTitle & { value: string | JSX.Element }
  item?: Record<string, TMenuItem & { value: string | JSX.Element }>
  submenu?: TMenuGroup & TItems
}

/* eslint-disable-next-line */
export interface TMenu {
  items?: TItems
  direction?: 'horizontal' | 'vertical'
  size?: 'lg' | 'sm' | 'xs' | 'md'
}

const _group = createContext<boolean>(false)
const _submenuProps = createContext<TMenuGroup | undefined>(undefined)

/* eslint-disable-next-line */
export function Menu({
  children,
  direction,
  size,
  items,
  ...props
}: React.PropsWithChildren<TMenu> &
  React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLUListElement>,
    HTMLUListElement
  >) {
  const _className = useMemo(
    () =>
      $.clcs([
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
      ]),
    [direction, size]
  )

  const { item: _item, title, submenu } = items ?? {}
  const item = useMemo(() => Object.entries(_item ?? {}), [_item])

  const group = useContext(_group)
  const submenuProps = useContext(_submenuProps)

  if (!children && !items) return

  if (!!items && group) {
    return (
      <Menu.Group {...submenuProps}>
        {!!title &&
          [title].map(({ value, ...props }) => (
            <Menu.Title {...props} key={'title'}>
              {' '}
              {value}{' '}
            </Menu.Title>
          ))}
        {!!item?.length &&
          item?.map(([key, { value, ...props }]) => (
            <Menu.Item key={key} {...props}>
              {' '}
              {value}{' '}
            </Menu.Item>
          ))}
        {!!submenu &&
          [submenu].map(({ title, item, submenu, ...props }) => (
            <Menu.Group {...props} key={'submenu'}>
              <Menu items={{ title, item, submenu }}></Menu>
            </Menu.Group>
          ))}
      </Menu.Group>
    )
  }

  if (!!items && !group) {
    return (
      <_group.Provider value={true}>
        <_submenuProps.Provider
          value={{ open: submenu?.open, collapsible: submenu?.collapsible }}
        >
          <Menu {...(props && { size, direction })}>
            {!!title &&
              [title].map(({ value, ...props }) => (
                <Menu.Title {...props} key={'title'}>
                  {' '}
                  {value}{' '}
                </Menu.Title>
              ))}
            {!!item?.length &&
              item?.map(([key, { value, ...props }]) => (
                <Menu.Item key={key} {...props}>
                  {' '}
                  {value}{' '}
                </Menu.Item>
              ))}
            {!!submenu &&
              [submenu].map(({ title, item, submenu }, i) => (
                <Menu key={i} items={{ title, item, submenu }} />
              ))}
          </Menu>
        </_submenuProps.Provider>
      </_group.Provider>
    )
  }

  return (
    <ul {...props} className={_className}>
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
