import type { Meta, StoryObj } from '@storybook/react'
import { Badge } from './badge'
import type { TBadge } from './badge'

function Basic({ label, ...props }: TBadge & { label: string }) {
  return <Badge {...props}>{label}</Badge>
}

const meta: Meta = {
  title: '@sys-design/badge',
  component: Badge,
}
export default meta

const args: TBadge & { label: string } = {
  label: 'Label',
}

export const _Basic: StoryObj<TBadge & { label: string }> = {
  name: 'Basic Property',
  args,
  render: Basic,
}
