export default (obj) => {
  var values = []
  for (var key in obj) {
    values.push([key, obj[key]])
  }
  return values
}
