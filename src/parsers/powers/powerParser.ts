import { Command, parseCommand } from '../../utils/index.js'
import { ParserKeyError } from '../errors/index.js'
import { FunctionName, ParserResult, ParserStatus } from '../../types/index.js'

export enum ReturnTrack {
  ALL = 'ALL',
  MAIN = 'MAIN',
  PROG = 'PROG',
  JOIN = 'JOIN'
}
export interface PowerParams {
  power: number
  track: ReturnTrack
}
export type PowerResult = ParserResult<PowerParams>
export const powerParserKey = 'p'

const parseFromCommand: (params: Command) => PowerResult = ({ key: potentialKey, attributes }) => {
  const [key, power] = potentialKey.split('')

  if (!isPowerCommand(key, power)) {
    throw new ParserKeyError('powerParser', key)
  }

  let [track] = attributes

  if (!Object.values(ReturnTrack).includes(track as ReturnTrack)) {
    track = ReturnTrack.ALL
  }

  return {
    key: powerParserKey,
    parser: FunctionName.POWER,
    status: ParserStatus.SUCCESS,
    params: {
      power: parseInt(power),
      track: track as ReturnTrack
    }
  }
}

function isPowerCommand (key: string, power: string): boolean {
  return key === powerParserKey && ['0', '1'].includes(power)
}

export const powerParser: (command: string) => PowerResult = (command) => {
  const commandParams = parseCommand(command)
  return parseFromCommand(commandParams)
}
