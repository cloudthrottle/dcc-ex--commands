export type BitValue = 0 | 1
export type Active = BitValue

export enum ParserStatus {
  SUCCESS = 'success'
}

export enum FunctionName {
  EEPROMS_ERASE = 'eraseParser',
  EEPROMS_STORE = 'storeParser',
  LOCO = 'locoParser',
  POWER = 'powerParser',
  ROSTER_ITEM = 'rosterItemParser',
  THROTTLE = 'throttleParser',
}

export interface ParserResult<T> {
  key: string
  parser: FunctionName
  status: ParserStatus
  params: T
}
