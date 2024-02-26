import type { Meta, StoryObj } from '@storybook/react'
import { Menu } from './menu'
import type { TMenu, TMenuGroup, TMenuTitle } from './menu'
import File from '@/assets/file.svg?react'
import Folder from '@/assets/folder.svg?react'

function Basic({ ...props }: TMenu) {
  return <Menu {...props}></Menu>
}

function Title({
  label,
  size,
  direction,
  sub,
}: TMenu & TMenuTitle & { label: string }) {
  return (
    <Menu {...{ size, direction }}>
      <Menu.Title {...{ sub }}>{label}</Menu.Title>
      <Menu.Item>Item 1 </Menu.Item>
      <Menu.Item>Item 2 </Menu.Item>
      <Menu.Item>Item N </Menu.Item>
    </Menu>
  )
}

function Group({
  label,
  size,
  direction,
  sub,
}: TMenu & TMenuTitle & { label: string }) {
  return (
    <Menu {...{ direction, size }}>
      <Menu.Title {...{ sub }}>{label}</Menu.Title>
      <Menu.Item>Item 1 </Menu.Item>
      <Menu.Item>Item 2 </Menu.Item>
      <Menu.Item>Item N </Menu.Item>
    </Menu>
  )
}

function Submenu({ open, collapsible, ...props }: TMenu & TMenuGroup) {
  return (
    <Menu {...props}>
      <Menu.Title>Title</Menu.Title>
      <Menu.Item>Item 1 </Menu.Item>
      <Menu.Item>Item 2 </Menu.Item>
      <Menu.Item>Item N </Menu.Item>
      <Menu.Group {...{ open, collapsible }}>
        <Menu.Title sub>Title</Menu.Title>
        <Menu.Item>Item 1 </Menu.Item>
        <Menu.Item>Item 2 </Menu.Item>
        <Menu.Item>Item N </Menu.Item>
      </Menu.Group>
    </Menu>
  )
}

function Treemenu({ open, collapsible, ...props }: TMenu & TMenuGroup) {
  return (
    <Menu {...props}>
      <Menu.Item>
        {' '}
        <File /> resume.pdf
      </Menu.Item>
      <Menu.Group {...{ open, collapsible }}>
        <Menu.Title sub>
          <Folder />
          My Files
        </Menu.Title>
        <Menu.Item>
          <File />
          Project-final.psd
        </Menu.Item>
        <Menu.Item>
          <File />
          Project-final-2.psd
        </Menu.Item>
        <Menu.Group {...{ open, collapsible }}>
          <Menu.Title sub>
            <Folder />
            Images
          </Menu.Title>
          <Menu.Item>
            <File />
            Screenshot1.png
          </Menu.Item>
          <Menu.Item>
            <File />
            Screenshot2.png
          </Menu.Item>
          <Menu.Group {...{ open, collapsible }}>
            <Menu.Title sub>
              <Folder />
              Others
            </Menu.Title>
            <Menu.Item>
              <File />
              Screenshot3.png
            </Menu.Item>
          </Menu.Group>
        </Menu.Group>
        <Menu.Group {...{ open, collapsible }}>
          <Menu.Title sub>
            <Folder />
            Work
          </Menu.Title>
          <Menu.Item>
            <File />
            exam.pdf
          </Menu.Item>
          <Menu.Item>
            <File />
            exam.pdf
          </Menu.Item>
        </Menu.Group>
        <Menu.Item>
          <File />
          Project-final.psd
        </Menu.Item>
      </Menu.Group>
    </Menu>
  )
}

const meta: Meta<TMenu> = {
  title: '@sys-design/menu',
  component: Menu,
  argTypes: {
    direction: {
      type: {
        name: 'enum',
        value: ['horizontal', 'vertical'],
      },
      defaultValue: 'horizontal',
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

const args: TMenu = {
  direction: 'vertical',
  size: 'md',
}

export const _Basic: StoryObj<TMenu> = {
  name: 'Basic Property',
  args,
  render: Basic,
}

export const _Title: StoryObj<TMenu & TMenuTitle & { label: string }> = {
  name: 'Title',
  args: {
    ...args,
    label: 'Title',
    sub: false,
  },
  render: Title,
}

export const _Group: StoryObj<TMenu & TMenuTitle & { label: string }> = {
  name: 'Group',
  args: {
    ...args,
    sub: false,
    label: 'Title',
  },
  render: Group,
}

export const _Submenu: StoryObj<TMenu & TMenuGroup> = {
  name: 'Submenu',
  args: {
    ...args,
    open: true,
    collapsible: false,
  },
  render: Submenu,
}

export const _Treemenu: StoryObj<TMenu & TMenuGroup> = {
  name: 'Tree Menu',
  args: {
    ...args,
    collapsible: true,
    open: true,
  },
  render: Treemenu,
}
