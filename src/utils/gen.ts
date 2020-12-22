export type ShortUniqueId = string

/**
 * To generate short unique id such as `vte9ig` `vs89l1` with 6 lengths
 */
export function shortId(): ShortUniqueId {
  let firstPart: any = (Math.random() * 46656) | 0
  let secondPart: any = (Math.random() * 46656) | 0
  firstPart = ('000' + firstPart.toString(36)).slice(-3)
  secondPart = ('000' + secondPart.toString(36)).slice(-3)
  return firstPart + secondPart
}
