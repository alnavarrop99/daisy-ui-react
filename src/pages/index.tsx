import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: Home,
})

export function Home() {
  return <div>Hello Home</div>
}
