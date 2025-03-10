export default function throttle(time, fn) {
  var isThrottled = false
  return (...args) => {
    if (isThrottled) return
    fn(...args)
    isThrottled = true
    setTimeout(() => { isThrottled = false }, time)
  }
}
