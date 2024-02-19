import { $ } from '@'
import lcss from './__root.module.css'
import SideBar from '@component/sidebar'
import { createRootRoute, Outlet } from '@tanstack/react-router'
import React from 'react'
import { Header, THeaderIcons, THeaderNavs } from '@component/header'
import Footer from '@component/footer'

export const Route = createRootRoute({
  component: Main,
})

export function Main({ children }: React.PropsWithChildren) {
  return (
    <section
      aria-label="main page"
      className={$.clcs(['m-auto grid', lcss?.['grid-3x2']])}
    >
      <nav
        className={$.clcs([
          'lg:min-dvh-screen lg:gap-rows-3 hidden border py-8 text-center lg:row-span-full lg:block',
        ])}
        aria-label="sidebar"
      >
        <SideBar list={SideBarList} />
      </nav>
      <header aria-label="header content" className="border p-4">
        <Header {...{ icons, navs }} />
      </header>
      <main aria-label="route content" className="border p-4">
        {children ?? <Outlet />}
      </main>
      <footer aria-label="footer content" className="border py-4">
        <Footer />
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

export const icons: Record<string, THeaderIcons> = {
  search: {
    Comp: () => (
      <img
        className="rounded-full"
        alt="icon-item"
        src={'https://placehold.co/30x30'}
      />
    ),
  },
  notifications: {
    Comp: () => (
      <img
        className="rounded-full"
        alt="icon-item"
        src={'https://placehold.co/30x30'}
      />
    ),
  },
  fullscreen: {
    Comp: () => (
      <img
        className="rounded-full"
        alt="icon-item"
        src={'https://placehold.co/30x30'}
      />
    ),
  },
  configurations: {
    Comp: () => (
      <img
        className="rounded-full"
        alt="icon-item"
        src={'https://placehold.co/30x30'}
      />
    ),
  },
} as const

export const navs: { [k in keyof typeof SideBarList]: THeaderNavs } = {
  user: { text: 'user' },
  client: { text: 'client' },
  credit: { text: 'credit' },
  home: { text: 'home' },
} as const
