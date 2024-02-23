import type { Meta, StoryObj } from '@storybook/react'
import { Button, TButton } from './button'
import Heart from '@/assets/heart.svg?react'

function Basic({ label, ...props }: TButton & { label: string }) {
  return <Button {...props}>{label}</Button>
}

function Icons(position: 'start' | 'end') {
  if (position === 'end') {
    return function ({ label, ...props }: TButton & { label: string }) {
      return (
        <Button {...props}>
          {label}
          <Heart />
        </Button>
      )
    }
  }
  return function ({ label, ...props }: TButton & { label: string }) {
    return (
      <Button {...props}>
        <Heart />
        {label}
      </Button>
    )
  }
}

function Loading(position: 'start' | 'end') {
  if (position === 'end') {
    return ({
      label,
      loading,
      loadingLabel,
      ...props
    }: TButton & {
      label: string
      loadingLabel: string
      loading?: boolean
    }) => {
      return (
        <Button {...props} loading={loading}>
          {loading ? loadingLabel : label}
          <Button.Loading />
        </Button>
      )
    }
  }
  return ({
    label,
    loading,
    loadingLabel,
    ...props
  }: TButton & {
    label: string
    loadingLabel: string
    loading?: boolean
  }) => {
    return (
      <Button {...props} loading={loading}>
        <Button.Loading />
        {loading ? loadingLabel : label}
      </Button>
    )
  }
}

const meta: Meta = {
  title: '@sys-design/button',
  component: Button,
}
export default meta

const args: { label: string } = {
  label: 'Button',
}

export const _Basic: StoryObj<TButton & { label: string }> = {
  name: 'Basic Property',
  args,
  render: Basic,
}

export const _IconsStart: StoryObj<TButton & { label: string }> = {
  name: 'Icon Start',
  args,
  render: Icons('start'),
}

export const _IconsEnd: StoryObj<TButton & { label: string }> = {
  name: 'Icon End',
  args,
  render: Icons('end'),
}

export const _LoadingStart: StoryObj<
  TButton & { label: string; loadingLabel: string; loading?: boolean }
> = {
  name: 'Loading Start',
  args: {
    ...args,
    loading: true,
    loadingLabel: 'Loading',
  },
  argTypes: {
    loadingLabel: {
      name: 'loading-label',
      type: 'string',
    },
  },
  render: Loading('start'),
}

export const _LoadingEnd: StoryObj<
  TButton & { label: string; loadingLabel: string; loading?: boolean }
> = {
  name: 'Loading End',
  args: {
    ...args,
    loading: true,
    loadingLabel: 'Loading',
  },
  argTypes: {
    loadingLabel: {
      name: 'loading-label',
      type: 'string',
    },
  },
  render: Loading('end'),
}
