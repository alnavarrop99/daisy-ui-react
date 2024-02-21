import type { Meta, StoryObj } from '@storybook/react'
import { CardBox, TCardBoxProp } from './card-box'

const meta: Meta = {
  title: '@component/card/card-box',
  component: CardBox,
}
export default meta
type TStory = StoryObj<typeof CardBox>

const args: TCardBoxProp = {
  info: 150,
  label: 'Lorem ipsum dolor',
  'url-img': 'https://placehold.co/50x50?text=Hello+World',
}

export const Primary: TStory = {
  args,
}
