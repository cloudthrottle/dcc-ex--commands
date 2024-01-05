import { Command, parseCommand } from '../../utils/index.js'
import { FunctionName, ParserResult, ParserStatus } from '../../types/index.js'
import { ParserKeyError } from '../errors/index.js'

interface TurnoutListParams {
  turnoutIds: number[]
}

export type TurnoutListResult = ParserResult<TurnoutListParams>
const turnoutListParserKey = 'jT'

const parseFromCommand: (params: Command) => TurnoutListResult = ({ key, attributes }) => {
  const possibleTurnoutIds = attributes

  if (key !== turnoutListParserKey) {
    throw new ParserKeyError('turnoutListParser', key)
  }

  const turnoutIds = possibleTurnoutIds.map(turnoutIdString => {
    const turnoutId = parseInt(turnoutIdString)
    if (!isNaN(turnoutId) && isFinite(turnoutId)) {
      return turnoutId
    }

    throw new Error(`Cab ID ${turnoutIdString} is not a number`)
  })

  return {
    key: turnoutListParserKey,
    parser: FunctionName.TURNOUT_LIST,
    status: ParserStatus.SUCCESS,
    params: {
      turnoutIds
    }
  }
}

export const turnoutListParser: (command: string) => TurnoutListResult = (command) => {
  const commandParams = parseCommand(command)
  return parseFromCommand(commandParams)
}
