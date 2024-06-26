import {
  createMemoryHistory,
  Outlet,
  RootRoute,
  Route,
  Router,
  RouterProvider,
} from '@tanstack/react-router'
import { render } from '@testing-library/react'

const createCustomRoute = (component: () => JSX.Element) => {
  const rootRoute = new RootRoute({
    component: Outlet,
  })

  const route = new Route({
    component: component,
    getParentRoute: () => rootRoute,
    path: '/',
  })

  const router = new Router({
    routeTree: rootRoute.addChildren([route]),
    history: createMemoryHistory(),
  })

  return router
}

const customRenderRoute = (router: Router) => {
  return <RouterProvider router={router} />
}

const customRenderStorie = (component: () => JSX.Element) =>
  customRenderRoute(createCustomRoute(component))

const customRenderTest = (component: () => JSX.Element) =>
  render(customRenderRoute(createCustomRoute(component)))

const clco = (styles: Record<string, boolean>): string => {
  const list = Object.entries(styles)
  return list
    .filter(([, val]) => val)
    .map(([className]) => className)
    .join(' ')
}

const clcs = (
  styles: (string | CSSModuleClasses | Record<string, boolean>)[]
): string => {
  return styles.join(' ')
}

// not work for talwindcss proccess
const clci = (styles?: string): string => {
  return (
    styles
      ?.split(' ')
      .map((w) => '!' + w)
      .join(' ') ?? ''
  )
  // return styles?.replace(/\w+/g, "!$&") ?? ""; -> perfomance
}

const RouteStorie = ({ Comp }: { Comp: () => JSX.Element }) => <Comp />
const createRouteStory = ({ Comp }: { Comp: () => JSX.Element }) =>
  customRenderStorie(() => <RouteStorie {...{ Comp }} />)

export const $ = {
  createRouteStory,
  customRenderStorie,
  customRenderTest,
  clcs,
  clco,
  clci,
}
