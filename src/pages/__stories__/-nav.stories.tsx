import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Layout as _Layout } from '@/pages/_layout'
import { Home } from '@/pages/_layout/index'
import { User } from '@/pages/_layout/user'
import { Client } from '@/pages/_layout/client'
import { Credit } from '@/pages/_layout/credit'
import { $ } from '@/helper'

const Root = ({ children }: React.PropsWithChildren) =>
  $.customRenderStorie(() => <_Layout>{children}</_Layout>)

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
