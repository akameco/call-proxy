const callProxy = require('.')

test('proxy', () => {
  let i = 0
  const x = callProxy(() => ++i)
  x()
  x()
  expect(x.__times__).toBe(2)
  expect(x.__calls__).toEqual([1, 2])
})
