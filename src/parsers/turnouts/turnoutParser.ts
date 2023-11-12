import { Command, parseCommand } from '../../utils/index.js'
import { ParserKeyError } from '../errors/index.js'
import { FunctionName, ParserResult, ParserStatus } from '../../types/index.js'
import { TurnoutState } from '../../commands/index.js'
import { isGenericTurnoutCommand, turnoutParserKey } from './utils/index.js'

export interface TurnoutParams {
  id: number
  thrown: TurnoutState
}

export type TurnoutResult = ParserResult<TurnoutParams>

const parseFromCommand: (params: Command) => TurnoutResult = ({ key, attributes }): TurnoutResult => {
  const [id, thrownOrKind] = attributes

  if (!isGenericTurnoutCommand(key, thrownOrKind)) {
    throw new ParserKeyError('turnoutParser', key)
  }

  const thrown = parseInt(thrownOrKind)

  return {
    key: turnoutParserKey,
    parser: FunctionName.TURNOUT,
    status: ParserStatus.SUCCESS,
    params: {
      id: parseInt(id),
      thrown: thrown === 0 ? TurnoutState.CLOSED : TurnoutState.THROWN
    }
  }
}

export const turnoutParser: (command: string) => TurnoutResult = (command) => {
  const commandParams = parseCommand(command)
  return parseFromCommand(commandParams)
}
