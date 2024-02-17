import SideBar from '@component/sidebar'
import { createRootRoute, Outlet } from '@tanstack/react-router'

export const Route = createRootRoute({
  component: Main,
})

export function Main() {
  return (
    <section
      aria-label="main page"
      className="m-auto grid w-10/12 grid-cols-2 grid-rows-none"
      style={{ gridTemplateColumns: 'min-content 1fr' }}
    >
      <div
        className="min-h-screen border px-16"
        aria-label="sidebar"
        role="navigation"
      >
        <SideBar list={SideBarList} />
      </div>
      <section
        aria-label="document route content"
        className="grid grid-rows-3 border"
        style={{ gridTemplateRows: 'min-content 1fr min-content' }}
      >
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
    </section>
  )
}

export const SideBarList = {
  home: '/',
  client: 'client',
  credit: 'credit',
  user: 'user',
}
