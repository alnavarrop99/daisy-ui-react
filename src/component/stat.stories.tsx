import type { Meta, StoryObj } from '@storybook/react'
import { Stat } from './stat'
import type { TStat, TStatGroup } from './stat'
import Heart from '@/assets/heart.svg?react'

function Basic({
  title,
  value,
  description,
  ...props
}: TStat & { title: string; value: string; description: string }) {
  return (
    <Stat {...props}>
      <Stat.Title>{title}</Stat.Title>
      <Stat.Value>{value}</Stat.Value>
      <Stat.Descp>{description}</Stat.Descp>
    </Stat>
  )
}

function Icon({
  title,
  value,
  description,
  ...props
}: TStat & { title: string; value: string; description: string }) {
  return (
    <Stat {...props}>
      <Stat.Img>
        {' '}
        <Heart />{' '}
      </Stat.Img>
      <Stat.Title>{title}</Stat.Title>
      <Stat.Value>{value}</Stat.Value>
      <Stat.Descp>{description}</Stat.Descp>
    </Stat>
  )
}

function Button({
  title,
  value,
  button,
  ...props
}: TStat & { title: string; value: string; button: string }) {
  return (
    <Stat {...props}>
      <Stat.Title>{title}</Stat.Title>
      <Stat.Value>{value}</Stat.Value>
      <Stat.Button size="sm" status="success">
        {button}
      </Stat.Button>
    </Stat>
  )
}

function Group({
  items,
  ...props
}: TStatGroup & {
  items: (TStat & { title: string; value: string; description: string })[]
}) {
  return (
    <Stat.Group {...props}>
      {items?.map((item, i) => <Basic key={i} {...item} />)}
    </Stat.Group>
  )
}

const meta: Meta = {
  title: '@sys-design/stat',
  component: Stat,
}
export default meta

const args: TStat & { title: string; value: string; description: string } = {
  title: 'Total Page Views',
  value: '89,400',
  description: '21% more than last month',
}

export const _Basic: StoryObj<
  TStat & { title: string; value: string; description: string }
> = {
  name: 'Basic Proper',
  args,
  render: Basic,
}

export const _Icon: StoryObj<
  TStat & { title: string; value: string; description: string }
> = {
  name: 'Icon',
  args,
  render: Icon,
}

export const _Button: StoryObj<
  TStat & { title: string; value: string; button: string }
> = {
  name: 'Button',
  args: {
    ...args,
    button: 'Button',
  },
  render: Button,
}

export const _Group: StoryObj<
  TStatGroup & {
    items: (TStat & { title: string; value: string; description: string })[]
  }
> = {
  name: 'Group',
  argTypes: {
    direction: {
      type: {
        name: 'enum',
        value: ['horizontal', 'vertical'],
      },
    },
  },
  args: {
    direction: 'horizontal',
    items: [
      args,
      {
        title: 'Downloads',
        value: '31K',
        description: 'From January 1st to February 1st',
      },
      {
        title: 'Users',
        value: '4,200',
        description: '↗︎ 40 (2%)',
      },
      {
        title: 'New Registers',
        description: '↘︎ 90 (14%)',
        value: '1,200',
      },
    ],
  },
  render: Group,
}
