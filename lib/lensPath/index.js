import lens from '../lens'

export default function lensPath(p) {
  return lens(
    function propGetter(obj) {
      return p.reduce((val, k) => val != null ? val[k] : undefined, obj)
    },
    function propSetter(val, obj) {
      if (typeof obj !== 'object') return obj
      var last = p.slice(0, -1).reduce((nested, k, idx) => {
        if (typeof nested[k] !== 'object') {
          nested[k] = Number.isNaN(parseInt(p[idx + 1])) ? {} : []
        }
        return nested[k]
      }, obj)
      last[p.slice(-1)[0]] = val
      return obj
    }
  )
}
