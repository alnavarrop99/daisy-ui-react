import type { Meta, StoryObj } from '@storybook/react'
import { Layout as _Layout } from '@pages/_layout'
import { _404 as NotFound } from '@pages/__404'
import { Login } from '@pages/login'
import { $ } from '@'

const meta: Meta = {
  title: '@pages/root',
  component: $.createRouteStory,
}

export default meta
type TStory = StoryObj<typeof $.createRouteStory>

export const __root: TStory = {
  name: '/',
  args: {
    Comp: () => (
      <_Layout>
        <div className="space-y-8">
          {Array.from({ length: 10 }).map((_, i) => (
            <p key={i}>
              Lorem ipsum dolor sit amet, officia excepteur ex fugiat
              reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit
              ex esse exercitation amet. Nisi anim cupidatat excepteur officia.
              Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet
              voluptate voluptate dolor minim nulla est proident. Nostrud
              officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex
              occaecat reprehenderit commodo officia dolor Lorem duis laboris
              cupidatat officia voluptate. Culpa proident adipisicing id nulla
              nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua
              reprehenderit commodo ex non excepteur duis sunt velit enim.
              Voluptate laboris sint cupidatat ullamco ut ea consectetur et est
              culpa et culpa duis.
            </p>
          ))}
        </div>
      </_Layout>
    ),
  },
}

export const __404: TStory = {
  name: '404',
  args: {
    Comp: () => <NotFound />,
  },
}

export const __login: TStory = {
  name: '/login',
  args: {
    Comp: () => <Login />,
  },
}
