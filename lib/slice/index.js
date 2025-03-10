import _curry3 from '../_internal/_curry3'
import max from '../max/max'
import min from '../min/min'

export default _curry3(function slice(fromInclusive, toExclusive, array) {
  return isNaN(fromInclusive) || isNaN(toExclusive) || fromInclusive >= toExclusive
    ? []
    : array.slice(
      max(0, fromInclusive),
      min(toExclusive, array.length)
    )
})
