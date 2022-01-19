import { Command, parseCommand } from '../../utils/index.js'
import { ParserKeyError } from '../errors/index.js'
import { FunctionName, ParserResult, ParserStatus } from '../../types/index.js'

export type EraseParams = object
export type EraseResult = ParserResult<EraseParams>
export const eraseParserKey = '0'

const parseFromCommand: (params: Command) => EraseResult = ({ key }) => {
  if (key !== eraseParserKey) {
    throw new ParserKeyError('eraseParser', key)
  }

  return {
    key: eraseParserKey,
    parser: FunctionName.EEPROMS_ERASE,
    status: ParserStatus.SUCCESS,
    params: {}
  }
}

export const eraseParser: (command: string) => EraseResult = (command) => {
  const commandParams = parseCommand(command)
  return parseFromCommand(commandParams)
}
