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

export const $ = {
  customRenderStorie,
  customRenderTest,
}
