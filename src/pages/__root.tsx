import { $ } from '@'
import styles from './__root.module.css'
import SideBar from '@component/sidebar'
import { createRootRoute, Outlet } from '@tanstack/react-router'

export const Route = createRootRoute({
  component: Main,
})

export function Main() {
  return (
    <section
      aria-label="main page"
      className={$.clcs([
        $.clco({
          'm-auto grid w-10/12': true,
        }),
        styles?.['grid-3x2'],
      ])}
    >
      <nav
        className="gap-rows-3 row-span-full min-h-screen border px-16"
        aria-label="sidebar"
      >
        <SideBar list={SideBarList} />
      </nav>
      <header aria-label="header bar" className="border py-4">
        header
      </header>
      <main aria-label="main route content" className="border">
        <Outlet />
      </main>
      <footer aria-label="footer bar" className="border py-4">
        footer
      </footer>
    </section>
  )
}

export const SideBarList = {
  home: '/',
  client: 'client',
  credit: 'credit',
  user: 'user',
}
