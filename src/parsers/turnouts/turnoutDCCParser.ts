import { Command, DualCoilAddress, parseCommand } from '../../utils/index.js'
import { ParserKeyError } from '../errors/index.js'
import { FunctionName, ParserResult, ParserStatus } from '../../types/index.js'
import { TurnoutState } from '../../commands/index.js'
import { isGenericTurnoutCommand, turnoutParserKey } from './utils/index.js'
import { TurnoutParams } from './turnoutParser.js'

interface TurnoutDCCParams extends TurnoutParams{
  kind: 'DCC'
  address: DualCoilAddress
}

export type TurnoutDCCResult = ParserResult<TurnoutDCCParams>

const parseFromCommand: (params: Command) => TurnoutDCCResult = ({ key, attributes }): TurnoutDCCResult => {
  const [id, kind, primaryAddress, subAddress, thrown] = attributes

  if (key !== turnoutParserKey) {
    throw new ParserKeyError('turnoutParser', key)
  }

  if (isGenericTurnoutCommand(key, kind)) {
    throw new ParserKeyError('turnoutDCCParser', key)
  }

  if (kind !== 'DCC') {
    throw new ParserKeyError('turnoutDCCParser', [key, kind].join(' '))
  }

  return {
    key: turnoutParserKey,
    parser: FunctionName.TURNOUT_DCC,
    status: ParserStatus.SUCCESS,
    params: {
      id: parseInt(id),
      kind: 'DCC',
      address: {
        primaryAddress: parseInt(primaryAddress),
        subAddress: parseInt(subAddress)
      },
      thrown: parseInt(thrown) === 0 ? TurnoutState.CLOSED : TurnoutState.THROWN
    }
  }
}

export const turnoutDCCParser: (command: string) => TurnoutDCCResult = (command) => {
  const commandParams = parseCommand(command)
  return parseFromCommand(commandParams)
}
