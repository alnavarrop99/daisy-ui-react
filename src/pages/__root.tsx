import { Outlet, createRootRoute } from '@tanstack/react-router'

export const Route = createRootRoute()

export function _root() {
  return (
    <>
      <Outlet />
    </>
  )
}
