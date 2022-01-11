import { Command } from '../../utils/index.js'
import { ParserKeyError } from '../errors/index.js'
import { ParserResult, ParserStatus } from '../../types'

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

export const powerParser: (params: Command) => PowerResult = ({ key: potentialKey, attributes }) => {
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
