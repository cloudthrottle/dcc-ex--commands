import { Command } from '../../utils'

export enum ReturnTrack {
  ALL = 'ALL',
  MAIN = 'MAIN',
  PROG = 'PROG',
  JOIN = 'JOIN'
}

export interface Power {
  power: number
  track: ReturnTrack
}

const powerParserKey = 'p'

export const powerParser: (params: Command) => Power = ({ key: potentialKey, attributes }) => {
  const [key, power] = potentialKey.split('')

  if (!isPowerCommand(key, power)) {
    throw `Can not parse. ${key}, ${attributes}`
  }

  let [track, _] = attributes

  if (!Object.values(ReturnTrack).includes(track as ReturnTrack)) {
    track = ReturnTrack.ALL
  }

  return {
    power: parseInt(power),
    track: track as ReturnTrack
  }
}

function isPowerCommand (key: string, power: string) {
  return key === powerParserKey && (power === '1' || power === '0')
}
