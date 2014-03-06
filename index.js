var is = module.exports = {}

;[].concat('String', 'Number', 'Object', 'Function', 'Date', 'RegExp')
  .forEach(function(type) {
    is[type.toLowerCase()] = isType(type)
  })

is['array'] = Array.isArray

is['empty'] = function(obj) {
  return !!(
    is.string(obj) && obj.trim().length === 0 ||
    is.array(obj) && obj.length === 0 ||
    is.object(obj) && Object.keys(obj).length === 0
  )
}

is['blank'] = function(obj) {
  return !!(!obj || is.empty(obj))
}

function isType(type) {
  return function(obj) {
    return {}.toString.call(obj) === '[object ' + type + ']'
  }
}
