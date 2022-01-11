import { Command } from '../../utils/index.js'
import { ParserKeyError } from '../errors/index.js'
import { ParserResult, ParserStatus } from '../../types/index.js'

export type EraseParams = object
export type EraseResult = ParserResult<EraseParams>
export const eraseParserKey = '0'

export const eraseParser: (params: Command) => EraseResult = ({ key }) => {
  if (key !== eraseParserKey) {
    throw new ParserKeyError('eraseParser', key)
  }

  return {
    key: eraseParserKey,
    status: ParserStatus.SUCCESS,
    params: {}
  }
}
