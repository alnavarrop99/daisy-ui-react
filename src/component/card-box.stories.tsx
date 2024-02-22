import type { Meta, StoryObj } from '@storybook/react'
import { CardBox, TCardBoxProp } from './card-box'
import { borderRadius } from 'tailwindcss/defaultTheme'

function ImgLeft({ info, label, 'url-img': url }: TCardBoxProp) {
  return (
    <CardBox>
      <CardBox.Img src={url} />
      <CardBox.Label>{label}</CardBox.Label>
      <CardBox.Info>{info}</CardBox.Info>
    </CardBox>
  )
}

function ImgRight({ info, label, 'url-img': url }: TCardBoxProp) {
  return (
    <CardBox>
      <CardBox.Label>{label}</CardBox.Label>
      <CardBox.Info>{info}</CardBox.Info>
      <CardBox.Img src={url} />
    </CardBox>
  )
}

function CenterInfo({ info, label, 'url-img': url }: TCardBoxProp) {
  return (
    <CardBox>
      <CardBox.Img src={url} />
      <CardBox.Label>{label}</CardBox.Label>
      <CardBox.Info className="text-center">{info}</CardBox.Info>
    </CardBox>
  )
}

function ImgRounded({
  info,
  label,
  'url-img': url,
  size,
}: TCardBoxProp & {
  size: keyof typeof borderRadius
}) {
  return (
    <CardBox>
      <CardBox.Img size={size} src={url} />
      <CardBox.Label>{label}</CardBox.Label>
      <CardBox.Info>{info}</CardBox.Info>
    </CardBox>
  )
}

function Range({
  info,
  label,
  'url-img': url,
  max,
  value,
}: TCardBoxProp & {
  value: number
  max: number
}) {
  return (
    <CardBox>
      <CardBox.Img src={url} />
      <CardBox.Label>{label}</CardBox.Label>
      <CardBox.Info>{info}</CardBox.Info>
      <CardBox.Range value={value} max={max} />
    </CardBox>
  )
}

function RangeWthLabel({
  info,
  label,
  'url-img': url,
  max,
  value,
  'range-label': rangeLabel,
}: TCardBoxProp & {
  value: number
  max: number
  'range-label': string
}) {
  return (
    <CardBox>
      <CardBox.Img src={url} />
      <CardBox.Label>{label}</CardBox.Label>
      <CardBox.Info>{info}</CardBox.Info>
      <CardBox.Range value={value} max={max}>
        {rangeLabel}
      </CardBox.Range>
    </CardBox>
  )
}

function Button({ info, label, 'url-img': url }: TCardBoxProp) {
  return (
    <CardBox>
      <CardBox.Img src={url} />
      <CardBox.Label>{label}</CardBox.Label>
      <CardBox.Info>{info}</CardBox.Info>
      <CardBox.Button />
    </CardBox>
  )
}

function ButtonWthLabel({
  info,
  label,
  'url-img': url,
  'label-btn': labelBtn,
}: TCardBoxProp & {
  'label-btn': string
}) {
  return (
    <CardBox>
      <CardBox.Img src={url} />
      <CardBox.Label>{label}</CardBox.Label>
      <CardBox.Info>{info}</CardBox.Info>
      <CardBox.Button>{labelBtn}</CardBox.Button>
    </CardBox>
  )
}

function Favorite({
  info,
  label,
  'url-img': url,
  favorite,
  size,
}: TCardBoxProp & {
  favorite: boolean
  size: keyof typeof borderRadius
}) {
  return (
    <CardBox favorite={favorite}>
      <CardBox.Img src={url} size={size} />
      <CardBox.Label>{label}</CardBox.Label>
      <CardBox.Info>{info}</CardBox.Info>
    </CardBox>
  )
}

function FavoritePosition({
  info,
  label,
  'url-img': url,
  position,
  value,
  size,
}: TCardBoxProp & {
  value: boolean
  position: 'right' | 'left'
  size: keyof typeof borderRadius
}) {
  return (
    <CardBox favorite={{ value, position }}>
      <CardBox.Img src={url} size={size} />
      <CardBox.Label>{label}</CardBox.Label>
      <CardBox.Info>{info}</CardBox.Info>
    </CardBox>
  )
}

const meta: Meta = {
  title: '@component/card-box',
  component: CardBox,
}
export default meta
type TStory = StoryObj<TCardBoxProp>

const args: TCardBoxProp = {
  info: 150,
  label: 'Lorem ipsum dolor',
  'url-img': 'https://placehold.co/50x50?text=Hello+World',
}

export const _ImgLeft: TStory = {
  args,
  name: 'Image Left',
  render: ImgLeft,
}

export const _ImgRight: TStory = {
  args,
  name: 'Image Right',
  render: ImgRight,
}

export const _ImgRounded: StoryObj<
  TCardBoxProp & { size: keyof typeof borderRadius }
> = {
  args: {
    ...args,
    size: 'full',
  },
  argTypes: {
    size: {
      type: {
        name: 'enum',
        value: Object.keys(borderRadius),
        required: false,
      },
    },
  },
  name: 'Rounded Image',
  render: ImgRounded,
}

export const _CenterInfo: TStory = {
  args,
  name: 'Center Info',
  render: CenterInfo,
}

export const _Range: StoryObj<TCardBoxProp & { value: number; max: number }> = {
  args: {
    ...args,
    max: 100,
    value: 70,
  },
  name: 'Range',
  render: Range,
}

export const _RangeWthLabel: StoryObj<
  TCardBoxProp & { value: number; max: number; 'range-label': string }
> = {
  args: {
    ...args,
    max: 100,
    value: 70,
    'range-label': 'Moto a pagar!!!',
  },
  name: 'Range with label',
  render: RangeWthLabel,
}

export const _Button: TStory = {
  args,
  name: 'Button',
  render: Button,
}

export const _ButtonWithLabel: StoryObj<
  TCardBoxProp & { 'label-btn': string }
> = {
  args: {
    ...args,
    'label-btn': 'Links Here',
  },
  name: 'Button with label',
  render: ButtonWthLabel,
}

export const _Favorite: StoryObj<
  TCardBoxProp & { favorite: boolean; size: keyof typeof borderRadius }
> = {
  args: {
    ...args,
    'url-img': 'https://placehold.co/80x80?text=Hello+World',
    favorite: true,
    size: 'lg',
  },
  argTypes: {
    size: {
      type: {
        name: 'enum',
        value: Object.keys(borderRadius),
      },
    },
  },
  name: 'Favorite',
  render: Favorite,
}

export const _FavoritePosition: StoryObj<
  TCardBoxProp & {
    value: boolean
    position: 'right' | 'left'
    size: keyof typeof borderRadius
  }
> = {
  args: {
    ...args,
    'url-img': 'https://placehold.co/80x80?text=Hello+World',
    position: 'right',
    value: true,
    size: 'lg',
  },
  argTypes: {
    position: {
      name: 'favorite-position',
      type: {
        name: 'enum',
        value: ['left', 'right'],
      },
    },
    value: {
      name: 'favorite-value',
    },
    size: {
      type: {
        name: 'enum',
        value: Object.keys(borderRadius),
      },
    },
  },
  name: 'Favorite position',
  render: FavoritePosition,
}
