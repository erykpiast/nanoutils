import _curry3 from '../_internal/_curry3'
import _merge from '../_internal/_merge'

export default _curry3(function mergeWithKey(func, left, right) {
  return _merge(left, right, (l, r, k) => func(k, l, r))
})
