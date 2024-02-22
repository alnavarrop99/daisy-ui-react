import { $ } from '@'

const clcs = vi.fn($.clcs)
const clco = vi.fn($.clco)
const clci = vi.fn($.clci)

describe('individual class utils functions ', () => {
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
  test('clci: ClassName be !important', () => {
    expect(clci('style1 style2 style3')).toBe('!style1 !style2 !style3')
    expect(clci()).toBe('')
  })
})

describe('all functions togheter', () => {
  test('should be a correct', () => {
    expect(
      clcs([
        'style1 style2',
        'style3',
        clco({
          style4: false,
          style5: true,
          style6: false,
        }),
        clci('style7 style8'),
      ])
    ).toBe('style1 style2 style3 style5 !style7 !style8')
  })
})
