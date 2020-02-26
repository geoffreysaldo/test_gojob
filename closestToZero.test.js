const closestToZero = require('./closestToZero')

describe('my tests', () => {
  test('nearest to 0 of [5, 4, -9, 6, -10, -1, 8] must be -1', () => {
    expect(closestToZero([5, 4, -9, 6, -10, -1, 8])).toBe(-1)
  })
  test('nearest to 0 of [8, 5, 10] must be 5', () => {
    expect(closestToZero([8, 5, 10])).toBe(5)
  })

  test('nearest to 0 of [8, -2, 3, -2] must be 2', () => {
    expect(closestToZero([8, 2, 3, -2])).toBe(2)
  })

  test('nearest to 0 of [2, 0] must be 0', () => {
    expect(closestToZero([0])).toBe(0)
  })
});
