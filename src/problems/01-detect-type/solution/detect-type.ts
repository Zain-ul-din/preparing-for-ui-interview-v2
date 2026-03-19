export type TType =
  | 'null'
  | 'undefined'
  | 'string'
  | 'number'
  | 'boolean'
  | 'symbol'
  | 'bigint'
  | 'object'
  | 'array'
  | 'function'
  | 'date'
  | 'regexp'
  | 'map'
  | 'set'
  | 'weakmap'
  | 'weakset'
  | 'error'
  | 'promise'
  | 'arraybuffer'
  | string

export const detectType = (value: any): TType => {
  if (value == null) return `${value}`
  const proto = Object.getPrototypeOf(value)
  if (proto == null) return 'object'
  return Object.getPrototypeOf(value).constructor.name.toLowerCase()
}
