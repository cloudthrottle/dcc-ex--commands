export * from './FunctionButtons.js'

export type BitValue = 0 | 1
export type Active = BitValue

export enum Enabled {
  OFF = 'OFF',
  ON = 'ON'
}

export enum ParserStatus {
  SUCCESS = 'success',
  FAILURE = 'failure'
}

export enum FunctionName {
  EEPROMS_ERASE = 'eraseParser',
  EEPROMS_STORE = 'storeParser',
  LOCO = 'locoParser',
  POWER = 'powerParser',
  ROSTER_ITEM = 'rosterItemParser',
  ROSTER_LIST = 'rosterListParser',
  THROTTLE = 'throttleParser',
  DECODER_ADDRESS = 'decoderAddress',
  TURNOUT = 'turnoutParser',
  TURNOUT_DCC = 'turnoutDCCParser'
}

export interface ParserResult<T> {
  key: string
  parser: FunctionName
  status: ParserStatus
  params: T
}
