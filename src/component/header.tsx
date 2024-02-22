import { $ } from '@'
import { Link } from '@tanstack/react-router'
import React, { useMemo } from 'react'

/* eslint-disable-next-line */
export function Header({
  children,
  list: _list,
  ...props
}: React.PropsWithChildren<{ list: Record<string, string> }> &
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>) {
  const list = useMemo(() => Object.entries(_list), [_list])
  return (
    <header
      {...props}
      aria-label="navigation bar"
      className={$.clcs([
        'flex items-center justify-between gap-4 border border-black p-4',
        props?.className ?? '',
      ])}
    >
      <ul
        aria-label="list label items"
        className="flex items-center gap-4 overflow-x-auto [&>*]:cursor-pointer"
      >
        {React.Children?.toArray(children)?.at(0)}
        {list.map(([label, url]) => (
          <li className="group" aria-label="label item" key={label}>
            <Link to={url} className="group capitalize no-underline">
              {({ isActive }) => (
                <span
                  className={$.clcs([
                    'group-hover:text-shadow',
                    $.clco({
                      'text-shadow': isActive,
                    }),
                  ])}
                >
                  {label}
                </span>
              )}
            </Link>
          </li>
        ))}
      </ul>

      <ul
        className="flex gap-4 overflow-x-auto [&>*]:cursor-pointer"
        aria-label="list icons items"
      >
        {React.Children?.toArray(children)?.slice(1)}
      </ul>
    </header>
  )
}

/* eslint-disable-next-line */
Header.Icon = function ({
  children,
  onClick,
  ...props
}: React.PropsWithChildren<{
  onClick?: React.MouseEventHandler<HTMLButtonElement>
}> &
  React.DetailedHTMLProps<
    React.LiHTMLAttributes<HTMLLIElement>,
    HTMLLIElement
  >) {
  return (
    <li
      {...props}
      className={$.clcs([
        'inline-grid place-content-center place-items-center hover:bg-black',
        props.className ?? '',
      ])}
      aria-label={'icon item'}
    >
      <button {...{ onClick }} className={$.clcs(['rounded-inherit'])}>
        {children}
      </button>
    </li>
  )
}

/* eslint-disable-next-line */
Header.Button = Header.Icon

export default Header
