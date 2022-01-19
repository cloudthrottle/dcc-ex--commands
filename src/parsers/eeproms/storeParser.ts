import { Command, parseCommand } from '../../utils/index.js'
import { ParserKeyError } from '../errors/index.js'
import { FunctionName, ParserResult, ParserStatus } from '../../types/index.js'

export type StoreParams = object
export type StoreResult = ParserResult<StoreParams>
export const storeParserKey = 'e'

const parseFromCommand: (params: Command) => StoreResult = ({ key, attributes }) => {
  if (key !== storeParserKey) {
    throw new ParserKeyError('storeParser', key)
  }

  return {
    key: storeParserKey,
    parser: FunctionName.EEPROMS_STORE,
    status: ParserStatus.SUCCESS,
    params: {}
  }
}

export const storeParser: (command: string) => StoreResult = (command) => {
  const commandParams = parseCommand(command)
  return parseFromCommand(commandParams)
}
