import type { Meta, StoryObj } from '@storybook/react'
import Footer from './footer'

const meta: Meta = {
  title: '@component/footer',
  component: Footer,
}
export default meta
type TStory = StoryObj<typeof Footer>

export const Primary: TStory = {
  args: {},
}
