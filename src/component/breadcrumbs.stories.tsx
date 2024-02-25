import type { Meta, StoryObj } from '@storybook/react'
import { Breadcrumbs } from './breadcrumbs'
import type { TBreadcrumbs } from './breadcrumbs'
import Heart from '@/assets/heart.svg?react'
import Folder from '@/assets/folder.svg?react'
import File from '@/assets/file.svg?react'

/* eslint-disable */
function Basic({ ...props }: TBreadcrumbs) {
  return (
    <Breadcrumbs.Group {...props}>
      <Breadcrumbs.Items> {<a href="#"> Home </a>} </Breadcrumbs.Items>
      <Breadcrumbs.Items> {<a href="#"> Documents </a>} </Breadcrumbs.Items>
      <Breadcrumbs.Items> Add Documents </Breadcrumbs.Items>
    </Breadcrumbs.Group>
  )
}

function Icons({ ...props }: TBreadcrumbs) {
  return (
    <Breadcrumbs.Group {...props}>
      <Breadcrumbs.Items>
        {' '}
        <Folder /> {<a href="#"> Home </a>}{' '}
      </Breadcrumbs.Items>
      <Breadcrumbs.Items>
        {' '}
        <Folder /> {<a href="#"> Documents </a>}{' '}
      </Breadcrumbs.Items>
      <Breadcrumbs.Items>
        {' '}
        <File /> Add Favorite{' '}
        <Heart className="mx-2 h-6 w-6 hover:fill-red-500 hover:stroke-white" />{' '}
      </Breadcrumbs.Items>
    </Breadcrumbs.Group>
  )
}

function Items({ ...props }: TBreadcrumbs) {
  return <Breadcrumbs {...props}> </Breadcrumbs>
}

/* eslint-enable */
const meta: Meta = {
  title: '@sys-design/breadcrumbs',
  component: Breadcrumbs,
}
export default meta

const args: TBreadcrumbs = {}

export const _Basic: StoryObj<TBreadcrumbs> = {
  name: 'Basic Property',
  args,
  render: Basic,
}

export const _Items: StoryObj<TBreadcrumbs> = {
  name: 'Items',
  args: {
    items: {
      '/home': 'Home',
      '/document': 'Document',
      favorite: <Heart />,
      Add: {
        label: 'Add',
        className:
          'rounded-md hover:bg-red-300 hover:p-2 hover:mx-2 cursor-pointer',
      },
    },
  },
  render: Items,
}

export const _Icons: StoryObj<TBreadcrumbs> = {
  name: 'Icons',
  args,
  render: Icons,
}
