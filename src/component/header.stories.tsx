import type { Meta, StoryObj } from '@storybook/react'
import { Header } from '@component/header'

const meta: Meta = {
  title: '@component/header',
  component: Header,
}
export default meta
type TStory = StoryObj<typeof Header>

export const Primary: TStory = {
  args: {
    icons: {
      'icon-1': {
        Comp: () => <div className="size-8 rounded-full border"></div>,
      },
      'icon-2': {
        Comp: () => <div className="size-8 rounded-full border"></div>,
      },
      'icon-3': {
        Comp: () => <div className="size-8 rounded-full border"></div>,
      },
    },
    navs: {
      'tab-1': { text: 'tab-1' },
      'tab-2': { text: 'tab-2' },
      'tab-3': { text: 'tab-3' },
      'tab-4': { text: 'tab-4' },
      'tab-5': { text: 'tab-5' },
      'tab-6': { text: 'tab-6' },
      'tab-7': { text: 'tab-7' },
      'tab-8': { text: 'tab-8' },
      'tab-9': { text: 'tab-9' },
    },
  },
}
