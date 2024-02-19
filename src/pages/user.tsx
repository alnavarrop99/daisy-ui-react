import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/user')({
  component: User,
})

export function User() {
  return <div>Hello User</div>
}
