import { $ } from '@'
import { Link } from '@tanstack/react-router'
import React, { useMemo } from 'react'

interface THeaderProps {
  list: Record<string, string>
}

/* eslint-disable-next-line */
export function Header({
  children,
  list: _list,
  ...props
}: React.PropsWithChildren<THeaderProps> &
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
        aria-label="list label"
        className="flex items-center gap-4 overflow-x-auto [&>*]:cursor-pointer"
      >
        <li aria-label="labelitem">
          {React.Children?.toArray(children)?.at(0)}
        </li>
        {list.map(([label, url]) => (
          <li className="group" aria-label="labelitem" key={label}>
            <Link to={url} className="capitalize no-underline">
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
        aria-label="list icons"
      >
        {React.Children?.toArray(children)
          ?.slice(1)
          .map((item, i) => (
            <li aria-label="item icon" key={i}>
              {item}
            </li>
          ))}
      </ul>
    </header>
  )
}

/* eslint-disable-next-line */
Header.Icon = function ({
  children,
  ...props
}: React.PropsWithChildren &
  React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >) {
  return (
    <button
      {...props}
      className={$.clcs([
        'inline-grid place-content-center place-items-center hover:bg-black',
        props.className ?? '',
      ])}
    >
      {children}
    </button>
  )
}

/* eslint-disable-next-line */
Header.Button = Header.Icon

export default Header
