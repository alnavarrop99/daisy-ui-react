import type { Meta, StoryObj } from '@storybook/react'
import { Avatar } from './avatar'
import type { TAvatar } from './avatar'
import { $ } from '@/helper'

function Basic({ src, ...props }: TAvatar & { src: string }) {
  return (
    <Avatar
      {...props}
      src={src}
      className="ring-black ring-offset-white"
    ></Avatar>
  )
}

function Label({
  label,
  src,
  ...props
}: TAvatar & { label: string; src?: string }) {
  return (
    <Avatar
      {...props}
      src={src}
      className={$.clco({ 'bg-neutral text-neutral-content': !src })}
    >
      {label}
    </Avatar>
  )
}

const meta: Meta = {
  title: '@sys-design/avatar',
  component: Avatar,
}
export default meta

const args = {
  src: 'https://placehold.co/50x50?text=Hello+World',
}

export const _Basic: StoryObj<TAvatar & { src: string }> = {
  name: 'Basic Property',
  args,
  argTypes: {
    src: {
      name: 'url-img',
      type: 'string',
    },
  },
  render: Basic,
}

export const _Label: StoryObj<TAvatar & { label: string; src: string }> = {
  name: 'Label',
  argTypes: {
    src: {
      name: 'url-img',
      type: 'string',
    },
  },
  args: {
    label: 'Label',
    src: undefined,
  },
  render: Label,
}
