var is = module.exports = {}

;[].concat('String', 'Number', 'Object', 'Function', 'Date', 'RegExp')
  .forEach(function(type) {
    is[type] = isType(type)
  })

is['Array'] = Array.isArray
is['Empty'] = isEmpty
is['Blank'] = isBlank


function isType(type) {
  return function(obj) {
    return {}.toString.call(obj) === '[object ' + type + ']'
  }
}

function isEmpty(obj) {
  return !!(
    is.String(obj) && obj.trim().length === 0 ||
    is.Array(obj) && obj.length === 0 ||
    is.Object(obj) && Object.keys(obj).length === 0
  )
}

function isBlank(obj) {
  return !!(!obj || is.Empty(obj))
}
