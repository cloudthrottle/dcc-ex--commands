import { Command, parseCommand, removeDoubleQuotes } from '../../utils/index.js'
import {
  FunctionName,
  ParserResult,
  ParserStatus
} from '../../types/index.js'
import { ParserAttributeError, ParserKeyError } from '../errors/index.js'
import { TurnoutState } from '../../commands/index.js'

interface TurnoutItemParams {
  turnoutId: number
  thrown: TurnoutState
  description: string
}

export type TurnoutItemResult = ParserResult<TurnoutItemParams>
const turnoutItemParserKey = 'jT'

const parseFromCommand: (params: Command) => TurnoutItemResult = ({ key, attributes }) => {
  const [turnoutId, state, description] = attributes

  if (key !== turnoutItemParserKey || attributes.length !== 3) {
    throw new ParserKeyError('turnoutItemParser', key)
  }

  if (!description.includes('"')) {
    throw new ParserAttributeError('description', description, 'description must be wrapped in double quotes')
  }

  const thrown = parseInt(state)

  return {
    key: turnoutItemParserKey,
    parser: FunctionName.TURNOUT_ITEM,
    status: ParserStatus.SUCCESS,
    params: {
      turnoutId: parseInt(turnoutId),
      thrown: thrown === 0 ? TurnoutState.CLOSED : TurnoutState.THROWN,
      description: removeDoubleQuotes(description)
    }
  }
}

export const turnoutItemParser: (command: string) => TurnoutItemResult = (command) => {
  const commandParams = parseCommand(command)
  return parseFromCommand(commandParams)
}
