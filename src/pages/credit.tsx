import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/credit')({
  component: Credit,
})

export function Credit() {
  return <div>Hello Credit</div>
}
