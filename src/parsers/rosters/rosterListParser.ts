import { Command, parseCommand } from '../../utils/index.js'
import { FunctionName, ParserResult, ParserStatus } from '../../types/index.js'
import { ParserKeyError } from '../errors/index.js'

interface RosterListParams {
  cabIds: number[]
}

export type RosterListResult = ParserResult<RosterListParams>
const rosterListParserKey = 'jR'

const parseFromCommand: (params: Command) => RosterListResult = ({ key, attributes }) => {
  const possibleCabIds = attributes

  if (key !== rosterListParserKey) {
    throw new ParserKeyError('rosterListParser', key)
  }

  const cabIds = possibleCabIds.map(cabIdString => {
    const cabId = parseInt(cabIdString)
    if (!isNaN(cabId) && isFinite(cabId)) {
      return cabId
    }

    throw new Error(`Cab ID ${cabIdString} is not a number`)
  })

  return {
    key: rosterListParserKey,
    parser: FunctionName.ROSTER_LIST,
    status: ParserStatus.SUCCESS,
    params: {
      cabIds
    }
  }
}

export const rosterListParser: (command: string) => RosterListResult = (command) => {
  const commandParams = parseCommand(command)
  return parseFromCommand(commandParams)
}
