import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Main as _Main } from '@pages/__root'
import { Home } from '@pages/index'
import { User } from '@pages/user'
import { Client } from '@pages/client'
import { Credit } from '@pages/credit'
import { $ } from '@'

const Root = ({ children }: React.PropsWithChildren) =>
  $.customRenderStorie(() => <_Main>{children}</_Main>)

const meta: Meta = {
  title: '@pages/nav',
  component: Root,
}

export default meta
type TStory = StoryObj<typeof Root>

export const SHome: TStory = {
  name: '/home',
  args: {
    children: <Home />,
  },
}

export const SCredit: TStory = {
  name: '/credit',
  args: {
    children: <Credit />,
  },
}

export const SClient: TStory = {
  name: '/client',
  args: {
    children: <Client />,
  },
}

export const SUser: TStory = {
  name: '/user',
  args: {
    children: <User />,
  },
}
