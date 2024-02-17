import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/client')({
  component: Client,
})

export function Client() {
  return <div>Hello Client</div>
}
