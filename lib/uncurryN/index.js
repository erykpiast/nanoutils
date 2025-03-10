import curry2 from '../_internal/_curry2'

export default curry2(function uncurryN(n, cb) {
  return function curried(...args) {
    var res = cb
    for (var i = 0; i < n; i++) {
      res = res(args[i])
    }
    return res
  }
})
