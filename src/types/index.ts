export type BitValue = 0 | 1
export type Active = BitValue

export enum ParserStatus {
  SUCCESS = 'success'
}

export enum FunctionName {
  THROTTLE = 'throttleParser',
  ROSTER_ITEM = 'rosterItemParser',
  EEPROMS_ERASE = 'eraseParser',
  EEPROMS_STORE = 'storeParser',
  POWER = 'powerParser',
}

export interface ParserResult<T> {
  key: string
  parser: FunctionName
  status: ParserStatus
  params: T
}
