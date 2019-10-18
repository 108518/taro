export const isArray = Array.isArray

export const EMPTY_OBJ: any = {}

export const EMPTY_ARR = {}

export function isString (o: unknown): o is string {
  return typeof o === 'string'
}

export function isUndefined (o: unknown): o is undefined {
  return typeof o === 'undefined'
}

export function isNull (o: unknown): o is null {
  return o === null
}

export function isObject<T> (o: unknown): o is T {
  return o !== null && typeof o === 'object'
}

export function isBoolean (o: unknown): o is boolean {
  return o === true || o === false
}

export function isFunction (o: unknown): o is Function {
  return typeof o === 'function'
}

export const noop = (..._: unknown[]) => {}
