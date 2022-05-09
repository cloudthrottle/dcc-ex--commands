import { Command, parseCommand } from '../../utils/index.js'
import { ParserKeyError } from '../errors/index.js'
import { FunctionName, ParserResult, ParserStatus } from '../../types/index.js'

export interface DecoderAddressParams {
  address: number | null
}
export type DecoderAddressResult = ParserResult<DecoderAddressParams>
export const decoderAddressParserKey = 'r'

const parseFromCommand: (params: Command) => DecoderAddressResult = ({ key, attributes }) => {
  if (key !== decoderAddressParserKey) {
    throw new ParserKeyError('decoderAddressParser', key)
  }

  const [address] = attributes

  if (parseInt(address) === -1) {
    return {
      key: decoderAddressParserKey,
      parser: FunctionName.DECODER_ADDRESS,
      status: ParserStatus.FAILURE,
      params: {
        address: null
      }
    }
  }

  return {
    key: decoderAddressParserKey,
    parser: FunctionName.DECODER_ADDRESS,
    status: ParserStatus.SUCCESS,
    params: {
      address: parseInt(address)
    }
  }
}

export const decoderAddressParser: (command: string) => DecoderAddressResult = (command) => {
  const commandParams = parseCommand(command)
  return parseFromCommand(commandParams)
}
