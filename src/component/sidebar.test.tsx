import { screen, waitFor } from '@testing-library/react'
import SideBar from '@component/sidebar'
import { SideBarList } from '@pages/_layout'
import { $ } from '@'

test('should be list in the DOM', async () => {
  $.customRenderTest(() => <SideBar list={SideBarList} />)
  await waitFor(() => {
    const list = screen.getByRole('list')
    expect(list).toBeInTheDocument()
  })

  await waitFor(() => {
    const list = screen.getByRole('list')
    expect(list.innerText).toIncludeMultiple([
      'client',
      'home',
      'credit',
      'user',
    ])
  })
})
