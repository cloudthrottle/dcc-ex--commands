import { Active } from '../../types'
import { makeCommandFromAttributes } from '../utils/makeCommand'

export enum Track {
  MAIN = 'MAIN',
  PROG = 'PROG',
  JOIN = 'JOIN'
}

export interface PowerCommandParams {
  power: Active
  track?: Track
}

/**
 * https://dcc-ex.com/reference/software/command-reference.html#track-power-commands
 */
export const powerCommand: (params: PowerCommandParams) => string = ({ power, track }) => {
  const attributes = [
    power,
    track
  ]
  return makeCommandFromAttributes(attributes)
}
