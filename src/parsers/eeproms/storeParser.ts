import { Command } from '../../utils/index.js'
import { ParserKeyError } from '../errors/index.js'
import { ParserResult, ParserStatus } from '../../types/index.js'

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
