import React, { useMemo } from 'react'

export interface THeaderIcons {
  Comp: () => JSX.Element
  action?: React.MouseEventHandler<HTMLElement>
}

export interface THeaderNavs {
  text: string
  action?: React.MouseEventHandler<HTMLElement>
}

export interface THeaderProp {
  icons?: Record<string, THeaderIcons>
  navs?: Record<string, THeaderNavs>
}

export const Header = ({ icons, navs }: THeaderProp) => {
  const iconsList = useMemo(() => Object.entries(icons ?? {}), [])
  const navsList = useMemo(() => Object.entries(navs ?? {}), [])
  return (
    <div
      role="group"
      aria-label="group items"
      className="flex items-center justify-between gap-4 md:justify-start"
    >
      <button aria-label="icon item menu" className="hover:shadow">
        <img alt="icon-item-menu" src={'https://placehold.co/30x30'} />
      </button>

      <ul
        aria-label="list items navigation"
        className="[&_span]: flex gap-4 overflow-x-auto [&>li]:cursor-pointer"
      >
        {navsList?.map(([key, { text, action }]) => (
          <li key={key} aria-label={'icon item ' + key}>
            <button onClick={action}>
              <span className="hover:text-shadow">{text}</span>
            </button>
          </li>
        ))}
      </ul>

      <ul
        aria-label="list item icons"
        className="hidden gap-4 md:ms-auto md:flex [&>li]:hover:cursor-pointer"
      >
        {iconsList?.map(([key, { Comp, action }]) => (
          <li
            className="flex items-center"
            aria-label={'icon item ' + key}
            key={key}
          >
            <button className="rounded-full hover:shadow" onClick={action}>
              <Comp />
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Header
