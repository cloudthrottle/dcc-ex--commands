import { Command } from '../../utils'
import { ParserKeyError } from '../errors'
import { ParserResult, ParserStatus } from '../../types'

export type StoreParams = object
export type StoreResult = ParserResult<StoreParams>
export const storeParserKey = 'e'

export const storeParser: (params: Command) => StoreResult = ({ key, attributes }) => {
  if (key !== storeParserKey) {
    throw new ParserKeyError('storeParser', key)
  }

  return {
    key: storeParserKey,
    status: ParserStatus.SUCCESS,
    params: {}
  }
}
