var is = module.exports = {}

;[].concat('String', 'Number', 'Object', 'Function', 'Date', 'RegExp')
  .forEach(function(type) {
    is[type] = isType(type)
  })

is['Array'] = Array.isArray

is['Empty'] = function(obj) {
  return !!(
    is.String(obj) && obj.trim().length === 0 ||
    is.Array(obj) && obj.length === 0 ||
    is.Object(obj) && Object.keys(obj).length === 0
  )
}

is['Blank'] = function(obj) {
  return !!(!obj || is.Empty(obj))
}

function isType(type) {
  return function(obj) {
    return {}.toString.call(obj) === '[object ' + type + ']'
  }
}
