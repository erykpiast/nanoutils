export default function path(arr, obj) {
  var value = obj
  for (var i = 0; i < arr.length; i++) {
    if (value == null) return
    value = value[arr[i]]
  }
  return value
}
