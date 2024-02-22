import type { Meta, StoryObj } from '@storybook/react'
import { SideBar, TSideBarProp } from '@component/sidebar'
import { $ } from '@'

function Navigation({ list }: TSideBarProp) {
  return <SideBar {...{ list }}></SideBar>
}

function Brand({ list, label }: TSideBarProp & { label: string }) {
  return (
    <SideBar {...{ list }}>
      <SideBar.Brand className="rounded-lg border border-black bg-green-500 p-2 px-4">
        {label}
      </SideBar.Brand>
    </SideBar>
  )
}

function Image({
  list,
  'url-img': src,
  brand,
  label,
}: TSideBarProp & {
  'url-img': string
  label: string
  brand: string
}) {
  return (
    <SideBar {...{ list }}>
      <SideBar.Brand className="rounded-lg border border-black bg-green-500 p-2 px-4">
        {brand}
      </SideBar.Brand>
      <SideBar.Img url-img={src}>{label}</SideBar.Img>
    </SideBar>
  )
}

const meta: Meta = {
  title: '@component/sidebar',
  component: $.createRouteStory,
  decorators: [(Story) => $.customRenderStorie(Story)],
}
export default meta

const args: TSideBarProp = {
  list: { nav1: 'nav1', nav2: 'nav2', nav3: 'nav3', nav4: 'nav4' },
}

type TStory = StoryObj<TSideBarProp>

export const _Navigation: TStory = {
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

export const _Brand: StoryObj<TSideBarProp & { label: string }> = {
  name: 'Brand',
  args: {
    ...args,
    label: 'Lorem ipsum',
  },
  render: Brand,
}

export const _Img: StoryObj<
  TSideBarProp & { 'url-img': string; label: string; brand: string }
> = {
  name: 'Image',
  args: {
    ...args,
    'url-img': 'https://placehold.co/50x50?text=Hello+World',
    label: 'Lorem ipsum dolor',
    brand: 'Lorem ipsum',
  },
  render: Image,
}
