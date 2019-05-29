const getPrototype = Object.prototype.toString

export const isString = (o: any) => {
  return getPrototype.call(o) === '[object String]'
}
export const isNumber = (o: any) => {
  return getPrototype.call(o) === '[object Number]'
}
export const isBoolean = (o: any) => {
  return getPrototype.call(o) === '[object Boolean]'
}
export const isNULL = (o: any) => {
  return getPrototype.call(o) === '[object Null]'
}
export const isObject = (o: any) => {
  return getPrototype.call(o) === '[object Object]'
}
export const isArray = (o: any) => {
  return getPrototype.call(o) === '[object Array]'
}
export const isFunction = (o: any) => {
  return getPrototype.call(o) === '[object Function]'
}
export const isRegExp = (o: any) => {
  return getPrototype.call(o) === '[object RegExp]'
}
export const isDocument = (o: any) => {
  return getPrototype.call(o) === '[object Document]' || getPrototype.call(o) === '[object HTMLDocument]'
}
export const isElement = (o: any) => {
  return !!o && o.nodeType === 1
}
