import type { Meta, StoryObj } from '@storybook/react'
import { Header } from '@component/header'
import { $ } from '@'

interface TNavigationProps {
  list: Record<string, string>
}
function Navigation({ list }: TNavigationProps) {
  return <Header {...{ list }}></Header>
}

function Button({ list, label }: TNavigationProps & { label: string }) {
  return (
    <Header {...{ list }}>
      <Header.Button className="size-8 rounded-lg border border-black">
        {label}
      </Header.Button>
    </Header>
  )
}

function Icons({ list }: TNavigationProps) {
  return (
    <Header {...{ list }}>
      <Header.Button className="size-8 rounded-lg border border-black">
        M
      </Header.Button>
      <Header.Icon className="size-8 rounded-full border border-black">
        A
      </Header.Icon>
      <Header.Icon className="size-8 rounded-full border border-black">
        B
      </Header.Icon>
      <Header.Icon className="size-8 rounded-full border border-black">
        C
      </Header.Icon>
      <Header.Icon className="size-8 rounded-full border border-black">
        D
      </Header.Icon>
      <Header.Icon className="size-8 rounded-full border border-black">
        E
      </Header.Icon>
      <Header.Icon className="size-8 rounded-full border border-black">
        F
      </Header.Icon>
    </Header>
  )
}

const meta: Meta = {
  title: '@component/header',
  component: $.createRouteStory,
  decorators: [(Story) => $.customRenderStorie(Story)],
}
export default meta

const args: TNavigationProps = {
  list: { nav1: 'nav1', nav2: 'nav2', nav3: 'nav3', nav4: 'nav4' },
}

type TStory = StoryObj<TNavigationProps>

export const _Label: TStory = {
  name: 'Navigation',
  args,
  render: Navigation,
}

export const _ActiveLinks: TStory = {
  name: 'Active link',
  args: {
    ...args,
    list: {
      ...args.list,
      nav3: '/',
    },
  },
  render: Navigation,
}

export const _Button: StoryObj<TNavigationProps & { label: string }> = {
  name: 'Menu Button',
  args: {
    ...args,
    label: 'M',
  },
  render: Button,
}

export const _Icons: TStory = {
  name: 'Icons Items',
  args,
  render: Icons,
}
