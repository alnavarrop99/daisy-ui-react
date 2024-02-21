import { createFileRoute, Outlet } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: Root,
})

export function Root({ children }: React.PropsWithChildren) {
  return <div className="container m-auto">{children ?? <Outlet />}</div>
}
