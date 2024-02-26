import type { Meta, StoryObj } from '@storybook/react'
import { Avatar } from './avatar'
import type { TGroupAvatar } from './avatar'

function Group({ ...props }: TGroupAvatar) {
  return (
    <Avatar.Group {...props}>
      <Avatar.Item
        mask="rounded"
        src="https://placehold.co/50x50?text=Hello+World1"
      />
      <Avatar.Item
        mask="rounded"
        src="https://placehold.co/50x50?text=Hello+World2"
      />
      <Avatar.Item
        mask="rounded"
        src="https://placehold.co/50x50?text=Hello+World3"
      />
      <Avatar.Item
        mask="rounded"
        src="https://placehold.co/50x50?text=Hello+World4"
      />
    </Avatar.Group>
  )
}

const meta: Meta<TGroupAvatar> = {
  title: '@sys-design/avatar/Group',
  component: Avatar.Group,
}
export default meta

const args: TGroupAvatar = {}

export const _Group: StoryObj<TGroupAvatar> = {
  name: 'Group',
  args,
  render: Group,
}
