import { makeCommandFromAttributes } from '../../utils'

export enum Direction {
  REVERSE = 0,
  FORWARD = 1
}

export type Speed = -1 | number

export interface ThrottleCommandParams {
  cab: number
  speed: Speed
  direction: Direction
}

const throttleCommandKey = 't'

/**
 * https://dcc-ex.com/reference/software/command-reference.html#engine-decoder-cab-operation-commands
 */
export const throttleCommand: (params: ThrottleCommandParams) => string = ({ cab, speed, direction }) => {
  const legacyAttribute = 1
  const attributes = [
    throttleCommandKey,
    legacyAttribute,
    cab,
    speed,
    direction
  ]
  return makeCommandFromAttributes(attributes)
}
