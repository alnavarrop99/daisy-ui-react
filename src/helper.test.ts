import { $ } from '@'

const clcs = vi.fn($.clcs)
const clco = vi.fn($.clco)

describe('', () => {
  test('clco: ClassName validator', () => {
    expect(clco({ style1: true, style2: true })).toBe('style1 style2')
    expect(clco({ style1: false, style2: true })).toBe('style2')
    expect(clco({ style1: false, style2: false })).not.toBe('style1 style2')
  })
  test('clcs: ClassName array', () => {
    expect(clcs(['style0', clco({ style1: true, style2: true })])).toBe(
      'style0 style1 style2'
    )
    expect(clcs(['style0', 'style1', 'style2'])).toBe('style0 style1 style2')
  })
})
