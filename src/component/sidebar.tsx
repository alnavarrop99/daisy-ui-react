import { $ } from '@/helper'
import { Link } from '@tanstack/react-router'
import React, { useMemo } from 'react'

/* eslint-disable-next-line */
export interface TSideBarProp {
  list: Record<string, string>
}

/* eslint-disable-next-line */
export const SideBar = ({
  children,
  list: _list,
  ...props
}: React.PropsWithChildren<TSideBarProp> &
  React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLUListElement>,
    HTMLUListElement
  >) => {
  const list = useMemo(() => Object.entries(_list), [])
  return (
    <nav
      {...props}
      aria-label="navbar"
      className={$.clcs([
        'inline-flex flex-col items-start justify-stretch gap-4 border border-black p-4',
        props?.className ?? '',
      ])}
    >
      {children}
      <form>
        <input className="border border-black" name="search" type="search" />
      </form>
      <ul
        className="direction-inherit flex w-full justify-stretch gap-[inherit] px-4 [&>*_a]:flex [&>*_a]:justify-between"
        aria-label="nav list"
      >
        {list.map(([key, url]) => (
          <li key={key} aria-label="nav items">
            <Link to={url} className="group capitalize no-underline">
              {({ isActive }) => (
                <>
                  <span
                    role="radio"
                    aria-checked={isActive}
                    aria-label="nav text and nav active"
                    className={[
                      $.clco({
                        'text-blue-500': isActive,
                        underline: isActive,
                      }),
                      'hover:text-blue-500',
                    ].join(' ')}
                  >
                    {key}
                  </span>
                  {!isActive ? <span>+</span> : <span>-</span>}
                </>
              )}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

/* eslint-disable-next-line */
SideBar.Brand = function ({
  children,
  ...props
}: React.PropsWithChildren &
  React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLSpanElement>,
    HTMLSpanElement
  >) {
  return (
    <span
      {...props}
      aria-label="brand label"
      className={$.clcs([props?.className ?? ''])}
    >
      {children}
    </span>
  )
}

/* eslint-disable-next-line */
SideBar.Img = function ({
  children,
  'url-img': src,
  ...props
}: React.PropsWithChildren<{ 'url-img': string }> &
  React.DetailedHTMLProps<
    React.ImgHTMLAttributes<HTMLImageElement>,
    HTMLImageElement
  >) {
  return (
    <div aria-label="user image" className="flex flex-row items-center gap-2">
      <img
        {...props}
        className={$.clcs(['rounded-full', props?.className ?? ''])}
        alt="users"
        src={src}
      />
      <span>{children}</span>
    </div>
  )
}

export default SideBar
