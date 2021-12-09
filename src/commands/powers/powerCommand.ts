import { makeCommand } from '../utils'
import { Active } from '../../types'

export enum Track {
  MAIN = 'MAIN',
  PROG = 'PROG',
  JOIN = 'JOIN'
}
export interface PowerCommandParams { power: Active, track?: Track }

/**
 * https://dcc-ex.com/reference/software/command-reference.html#track-power-commands
 */
export const powerCommand: (params: PowerCommandParams) => string = ({ power, track }) => {
  const str = [power.toString(), track].filter(char => !!char).join(' ')
  return makeCommand(str)
}
