import type { Meta, StoryObj } from '@storybook/react'
import { CardInfo, TCardInfoProp } from './card-info'

const meta: Meta = {
  title: '@component/card/card-info',
  component: CardInfo,
}
export default meta
type TStory = StoryObj<typeof CardInfo>

const args: TCardInfoProp = {
  info: 150,
  label: 'Lorem ipsum dolor',
  'url-img': 'https://placehold.co/150x150?text=Hello+World',
}

export const Primary: TStory = {
  args,
}