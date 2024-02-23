import type { Meta, StoryObj } from '@storybook/react'
import { LoginForm } from './login-form'

const meta: Meta = {
  title: '@component/login-form',
  component: LoginForm,
}
export default meta
type TStory = StoryObj<typeof LoginForm>

export const Primary: TStory = {
  args: {},
}
