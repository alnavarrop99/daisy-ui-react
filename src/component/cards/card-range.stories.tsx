import type { Meta, StoryObj } from '@storybook/react'
import { CardRange, TCardRangeProp } from './card-range'

const meta: Meta = {
  title: '@component/card/card-range',
  component: CardRange,
}
export default meta
type TStory = StoryObj<typeof CardRange>

const args: TCardRangeProp = {
  label: 'Lorem ipsum dolor',
  'url-img': 'https://placehold.co/50x50?text=Hello+World',
  value: 70,
  'max-value': 100,
}

export const Primary: TStory = {
  args,
}
