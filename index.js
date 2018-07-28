module.exports = func => {
  const calls = []
  const handler = {
    apply(target, prop, args) {
      const result = Reflect.apply(target, prop, args)
      calls.push(result)
      return result
    },
    get(target, prop, receiver) {
      if (prop === '__times__') {
        return calls.length
      } else if (prop === '__calls__') {
        return calls
      }
      return Reflect.get(target, prop, receiver)
    },
  }
  return new Proxy(func, handler)
}
