import { render } from '@testing-library/react'
import { Header } from '@component/header'
import { icons, navs } from '@pages/__root'
import { screen } from '@testing-library/react'

test('should be list in the DOM', () => {
  render(<Header {...{ icons, navs }} />)
  const list = screen.getAllByRole('list')
  expect(list).toBeArray()
})
