export type BitValue = 0 | 1
export type Active = BitValue

export enum ParserStatus {
  SUCCESS = 'success'
}

export interface ParserResult<T> {
  key: string
  status: ParserStatus
  params: T
}
