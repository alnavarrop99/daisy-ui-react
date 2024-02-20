import { render } from '@testing-library/react'
import { Footer } from '@component/footer'

test('should be list in the DOM', () => {
  const { container } = render(<Footer />)
  const p = container.querySelector('p')
  expect(p).toHaveTextContent('Todos los derechos reservados')
})
