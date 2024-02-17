import type { Meta, StoryObj } from '@storybook/react'
import { SideBar as _SideBar, SideBarProp } from '@component/sidebar'
import { SideBarList } from '@pages/__root'
import { $ } from '@'

const SideBar = ({ list }: SideBarProp) =>
  $.customRenderStorie(() => <_SideBar list={list} />)

const meta: Meta = {
  title: 'sidebar',
  component: SideBar,
}
export default meta
type Story = StoryObj<typeof SideBar>

export const Primary: Story = {
  args: {
    list: SideBarList,
  },
}