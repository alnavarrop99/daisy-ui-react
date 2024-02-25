import type { Meta, StoryObj } from '@storybook/react'
import { TimeLine } from './timeline'
import type { TTimeLine } from './timeline'
import Radio from '@/assets/radio.svg?react'

function Basic({ ...props }: TTimeLine) {
  return <TimeLine {...props}></TimeLine>
}

function Status({
  value,
  start,
  end,
  ...props
}: TTimeLine & {
  value: 'info' | 'success' | 'warning' | 'error'
  start: number
  end: number
}) {
  return <TimeLine {...props} status={{ value, start, end }}></TimeLine>
}

const meta: Meta = {
  title: '@sys-design/timeline',
  component: TimeLine,
}
export default meta

const args: TTimeLine = {
  items: [
    {
      start: { label: '1984' },
      middle: { label: <Radio /> },
      end: { label: 'Macintosh computer' },
    },
    {
      start: { label: '1998' },
      middle: { label: <Radio /> },
      end: { label: 'iMac' },
    },
    {
      start: { label: '2001' },
      middle: { label: <Radio /> },
      end: { label: 'iPod' },
    },
    {
      start: { label: '2007' },
      middle: { label: <Radio /> },
      end: { label: 'iPhone' },
    },
    {
      start: { label: '2015' },
      middle: { label: <Radio /> },
      end: { label: 'Apple Watch' },
    },
  ],
}

export const _Basic: StoryObj<TTimeLine> = {
  name: 'Basic Property',
  args,
  render: Basic,
}

export const _Bex: StoryObj<TTimeLine> = {
  name: 'Box',
  args: {
    items: [
      {
        start: { label: '1984', box: true },
        middle: { label: <Radio /> },
        end: { label: 'Macintosh computer' },
      },
      {
        start: { label: '1998' },
        middle: { label: <Radio /> },
        end: { label: 'iMac' },
      },
      {
        start: { label: '2001' },
        middle: { label: <Radio /> },
        end: { label: 'iPod' },
      },
      {
        start: { label: '2007' },
        middle: { label: <Radio /> },
        end: { label: 'iPhone' },
      },
      {
        start: { label: '2015' },
        middle: { label: <Radio /> },
        end: { label: 'Apple Watch' },
      },
      {
        start: { label: '2023' },
        middle: { label: <Radio /> },
        end: { label: 'IA' },
      },
      {
        start: { label: '2024', box: true },
        end: { label: '?!!!', box: true },
      },
    ],
  },
  render: Basic,
}

export const _Status: StoryObj<
  TTimeLine & {
    value: 'info' | 'success' | 'warning' | 'error'
    start: number
    end: number
  }
> = {
  name: 'Status',
  args: {
    ...args,
    value: 'success',
    start: 0,
    end: 2,
  },
  argTypes: {
    value: {
      name: 'status-color',
      type: {
        name: 'enum',
        value: ['info', 'success', 'warning', 'error'],
      },
    },
  },
  render: Status,
}
