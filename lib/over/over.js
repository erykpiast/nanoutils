export default (lens, cb, value) => {
  var l = lens(value)
  return l.set(cb(l.get()))
}
