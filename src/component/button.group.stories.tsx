import type { Meta, StoryObj } from '@storybook/react'
import { Button } from './button'
import type { TButtonGroup } from './button'
import Home from '@/assets/home.svg?react'
import Info from '@/assets/info.svg?react'
import Stat from '@/assets/stat.svg?react'

function Basic({ ...props }: TButtonGroup) {
  return (
    <Button.Group {...props}>
      <Button.Item>
        {' '}
        <Home />{' '}
      </Button.Item>
      <Button.Item>
        {' '}
        <Info />{' '}
      </Button.Item>
      <Button.Item>
        {' '}
        <Stat />{' '}
      </Button.Item>
    </Button.Group>
  )
}

function Active({ ...props }: TButtonGroup) {
  return (
    <Button.Group {...props}>
      <Button.Item>
        {' '}
        <Home />{' '}
      </Button.Item>
      <Button.Item active>
        {' '}
        <Info />{' '}
      </Button.Item>
      <Button.Item>
        {' '}
        <Stat />{' '}
      </Button.Item>
    </Button.Group>
  )
}

const meta: Meta<TButtonGroup> = {
  title: '@sys-design/button/Group',
  component: Button.Group,
  argTypes: {
    type: {
      type: {
        name: 'enum',
        value: ['join', 'nav'],
      },
      defaultValue: 'md',
    },
    size: {
      type: {
        name: 'enum',
        value: ['xs', 'sm', 'md', 'lg'],
      },
      defaultValue: 'md',
    },
  },
}
export default meta

const args: TButtonGroup = {
  type: 'join',
}

export const _Basic: StoryObj<TButtonGroup> = {
  name: 'Group',
  args,
  render: Basic,
}

export const _Active: StoryObj<TButtonGroup> = {
  name: 'Active',
  args,
  render: Active,
}
