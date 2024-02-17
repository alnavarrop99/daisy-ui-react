import { Link } from '@tanstack/react-router'
import { useMemo } from 'react'

export interface SideBarProp {
  list: Record<string, string>
}

export const SideBar = ({ list: _list }: SideBarProp) => {
  const list = useMemo(() => Object.entries(_list), [])
  return (
    <nav className=" p-4">
      <ul aria-label="nav group" className="flex flex-col space-y-4">
        {list.map(([key, url]) => (
          <li key={key} aria-label="nav link">
            <Link to={url} className="group capitalize no-underline">
              {({ isActive }) => (
                <span
                  role="radio"
                  aria-checked={isActive}
                  aria-label="nav text and nav active"
                  className={[
                    'hover:text-blue-500 group-active:underline',
                    !isActive ? 'text-black' : 'text-blue-500',
                  ].join(' ')}
                >
                  {key}
                </span>
              )}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default SideBar
