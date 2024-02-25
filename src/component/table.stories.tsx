import type { Meta, StoryObj } from '@storybook/react'
import { Table } from './table'
import type { TTable } from './table'
import Heart from '@/assets/heart.svg?react'

function Basic({ ...props }: TTable<TCols>) {
  return <Table {...props}></Table>
}

function Fav({ children }: React.PropsWithChildren) {
  return (
    <span className="flex items-center gap-2">
      {children}
      <Heart className="h-8 w-8 hover:fill-red-500 hover:stroke-white" />
    </span>
  )
}

const meta: Meta = {
  title: '@sys-design/table',
  component: Table,
}
export default meta

interface TCols {
  id: string
  name: string
  job: string
  'favorite-color': string | JSX.Element
}
const args: TTable<TCols> = {
  cols: {
    id: '',
    name: 'Name',
    job: 'Job',
    'favorite-color': 'Favorite Color',
  },
  rows: [
    {
      id: '1',
      name: 'Cy Ganderton',
      job: 'Quality Control Specialist',
      'favorite-color': 'Blue',
    },
    {
      id: '1',
      name: 'Cy Ganderton',
      job: 'Quality Control Specialist',
      'favorite-color': 'Blue',
    },
    {
      id: '1',
      name: 'Cy Ganderton',
      job: 'Quality Control Specialist',
      'favorite-color': 'Blue',
    },
    {
      id: '1',
      name: 'Cy Ganderton',
      job: 'Quality Control Specialist',
      'favorite-color': 'Blue',
    },
    {
      id: '1',
      name: 'Cy Ganderton',
      job: 'Quality Control Specialist',
      'favorite-color': 'Blue',
    },
    {
      id: '1',
      name: 'Cy Ganderton',
      job: 'Quality Control Specialist',
      'favorite-color': 'Blue',
    },
    {
      id: '1',
      name: 'Cy Ganderton',
      job: 'Quality Control Specialist',
      'favorite-color': 'Blue',
    },
    {
      id: '1',
      name: 'Cy Ganderton',
      job: 'Quality Control Specialist',
      'favorite-color': 'Blue',
    },
    {
      id: '1',
      name: 'Cy Ganderton',
      job: 'Quality Control Specialist',
      'favorite-color': 'Blue',
    },
    {
      id: '1',
      name: 'Cy Ganderton',
      job: 'Quality Control Specialist',
      'favorite-color': 'Blue',
    },
    {
      id: '1',
      name: 'Cy Ganderton',
      job: 'Quality Control Specialist',
      'favorite-color': 'Blue',
    },
    {
      id: '2',
      name: 'Hart Hagerty',
      'favorite-color': 'Purple',
      job: 'Tax Accountant',
    },
    {
      id: '2',
      name: 'Hart Hagerty',
      'favorite-color': 'Purple',
      job: 'Tax Accountant',
    },
    {
      id: '2',
      name: 'Hart Hagerty',
      'favorite-color': 'Purple',
      job: 'Tax Accountant',
    },
    {
      id: '2',
      name: 'Hart Hagerty',
      'favorite-color': 'Purple',
      job: 'Tax Accountant',
    },
    {
      id: '2',
      name: 'Hart Hagerty',
      'favorite-color': 'Purple',
      job: 'Tax Accountant',
    },
    {
      id: '2',
      name: 'Hart Hagerty',
      'favorite-color': 'Purple',
      job: 'Tax Accountant',
    },
    {
      id: '2',
      name: 'Hart Hagerty',
      'favorite-color': 'Purple',
      job: 'Tax Accountant',
    },
    {
      id: '2',
      name: 'Hart Hagerty',
      'favorite-color': 'Purple',
      job: 'Tax Accountant',
    },
    {
      id: '2',
      name: 'Hart Hagerty',
      'favorite-color': 'Purple',
      job: 'Tax Accountant',
    },
    {
      id: '2',
      name: 'Hart Hagerty',
      'favorite-color': 'Purple',
      job: 'Tax Accountant',
    },
    {
      id: '2',
      name: 'Hart Hagerty',
      'favorite-color': 'Purple',
      job: 'Tax Accountant',
    },
    {
      id: '3',
      name: 'Brice Swyre',
      job: 'Desktop Support Technician',
      'favorite-color': '	Red',
    },
    {
      id: '3',
      name: 'Brice Swyre',
      job: 'Desktop Support Technician',
      'favorite-color': '	Red',
    },
    {
      id: '3',
      name: 'Brice Swyre',
      job: 'Desktop Support Technician',
      'favorite-color': '	Red',
    },
    {
      id: '3',
      name: 'Brice Swyre',
      job: 'Desktop Support Technician',
      'favorite-color': '	Red',
    },
    {
      id: '3',
      name: 'Brice Swyre',
      job: 'Desktop Support Technician',
      'favorite-color': '	Red',
    },
    {
      id: '3',
      name: 'Brice Swyre',
      job: 'Desktop Support Technician',
      'favorite-color': '	Red',
    },
    {
      id: '3',
      name: 'Brice Swyre',
      job: 'Desktop Support Technician',
      'favorite-color': '	Red',
    },
    {
      id: '3',
      name: 'Brice Swyre',
      job: 'Desktop Support Technician',
      'favorite-color': '	Red',
    },
    {
      id: '3',
      name: 'Brice Swyre',
      job: 'Desktop Support Technician',
      'favorite-color': '	Red',
    },
    {
      id: '3',
      name: 'Brice Swyre',
      job: 'Desktop Support Technician',
      'favorite-color': '	Red',
    },
    {
      id: '3',
      name: 'Brice Swyre',
      job: 'Desktop Support Technician',
      'favorite-color': '	Red',
    },
  ],
}

export const _Basic: StoryObj<TTable<TCols>> = {
  name: 'Basic Property',
  args,
  render: Basic,
}

export const _Status: StoryObj<TTable<TCols>> = {
  name: 'Status',
  args: {
    ...args,
    rows: [
      {
        id: '1',
        name: 'Cy Ganderton',
        job: 'Quality Control Specialist',
        'favorite-color': 'Blue',
      },
      {
        status: 'success',
        id: '2',
        name: 'Hart Hagerty',
        'favorite-color': 'Purple',
        job: 'Tax Accountant',
      },
      {
        id: '3',
        name: 'Brice Swyre',
        job: 'Desktop Support Technician',
        'favorite-color': 'Red',
      },
    ],
  },
  render: Basic,
}

export const _Hover: StoryObj<TTable<TCols>> = {
  name: 'Hover',
  args: {
    ...args,
    rows: [
      {
        id: '1',
        name: 'Cy Ganderton',
        job: 'Quality Control Specialist',
        'favorite-color': 'Blue',
      },
      {
        hoverable: true,
        id: '2',
        name: 'Hart Hagerty',
        'favorite-color': 'Purple',
        job: 'Tax Accountant',
      },
      {
        id: '3',
        name: 'Brice Swyre',
        job: 'Desktop Support Technician',
        'favorite-color': 'Red',
      },
    ],
  },
  render: Basic,
}

export const _CustomsCols: StoryObj<TTable<TCols>> = {
  name: 'Customs Cols',
  args: {
    ...args,
    cols: {
      ...args.cols,
      'favorite-color': <Fav> Favorite Color </Fav>,
    },
  },
  render: Basic,
}

export const _CustomsRows: StoryObj<TTable<TCols>> = {
  name: 'Customs Rows',
  args: {
    ...args,
    rows: [
      {
        id: '1',
        name: 'Cy Ganderton',
        job: 'Quality Control Specialist',
        'favorite-color': 'Blue',
      },
      {
        id: '2',
        name: 'Hart Hagerty',
        'favorite-color': 'Purple',
        job: 'Tax Accountant',
      },
      {
        id: '3',
        name: 'Brice Swyre',
        job: 'Desktop Support Technician',
        'favorite-color': <Fav> Favorite Color </Fav>,
      },
    ],
  },
  render: Basic,
}
