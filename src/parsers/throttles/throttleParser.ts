import { Command } from '../../utils/index.js'
import { ParserAttributeError, ParserKeyError } from '../errors/index.js'
import { ParserResult, ParserStatus } from '../../types'
import { Direction, Speed } from '../../commands/index.js'

export interface ThrottleParams {
  register: number
  speed: Speed
  direction: Direction
}
export type ThrottleResult = ParserResult<ThrottleParams>
export const throttleParserKey = 'T'

export const throttleParser: (params: Command) => ThrottleResult = ({ key, attributes }) => {
  const [register, speed, directionString] = attributes

  if (key !== throttleParserKey) {
    throw new ParserKeyError('cabParser', key)
  }

  const direction = parseInt(directionString)

  if (isValidDirection(direction)) {
    throw new ParserAttributeError('direction', direction, `it must be one of ${Object.values(Direction).join(' | ')}`)
  }

  return {
    key: throttleParserKey,
    status: ParserStatus.SUCCESS,
    params: {
      register: parseInt(register),
      speed: parseInt(speed),
      direction: direction as Direction
    }
  }
}

function isValidDirection (direction: number): boolean {
  return !Object.values(Direction).includes(direction as Direction)
}
