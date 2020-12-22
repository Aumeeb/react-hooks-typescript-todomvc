export interface Keys {
  [index: string]: number
}
export const keyMap: Keys = {
  enter: 13,
}
export function supportKey(key: string) {
  return !!keyMap[key.toLocaleLowerCase()]
}
