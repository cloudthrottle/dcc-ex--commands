import {Command} from '../../utils'
import {ParserKeyError} from '../errors'
import {ParserResult, ParserStatus} from "../../types";

export enum ReturnTrack {
  ALL = 'ALL',
  MAIN = 'MAIN',
  PROG = 'PROG',
  JOIN = 'JOIN'
}

export interface Power extends ParserResult{
  power: number
  track: ReturnTrack
}

const powerParserKey = 'p'

function isPowerCommand (key: string, power: string): boolean {
  return key === powerParserKey && ['0', '1'].includes(power)
}

export const powerParser: (params: Command) => Power = ({ key: potentialKey, attributes }) => {
  const [key, power] = potentialKey.split('')

  if (!isPowerCommand(key, power)) {
    throw new ParserKeyError('powerParser', key)
  }

  let [track] = attributes

  if (!Object.values(ReturnTrack).includes(track as ReturnTrack)) {
    track = ReturnTrack.ALL
  }

  return {
    status: ParserStatus.SUCCESS,
    power: parseInt(power),
    track: track as ReturnTrack
  }
}
