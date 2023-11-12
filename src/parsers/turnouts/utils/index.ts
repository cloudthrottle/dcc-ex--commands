export const turnoutParserKey = 'H'
export const isGenericTurnoutCommand = (key: string, thrownOrKind: string): boolean => {
  return key === turnoutParserKey && ['0', '1'].includes(thrownOrKind)
}
