export type BitValue = 0 | 1
export type Active = BitValue

export enum ParserStatus {
    SUCCESS = 'success'
}

export type ParserResult = {
    status: ParserStatus
}