import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: Main,
})

export function Main() {
  return <div>Hello World</div>
}
