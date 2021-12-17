import { Command } from '../../utils'
import { ParserAttributeError, ParserKeyError } from '../errors'
import { ParserResult, ParserStatus } from '../../types'
import { Direction } from '../../commands'

export interface ThrottleParams {
  cab: number
  speed: number
  direction: Direction
}
export type ThrottleResult = ParserResult<ThrottleParams>
export const throttleParserKey = 'T'

export const throttleParser: (params: Command) => ThrottleResult = ({ key, attributes }) => {
  const [cab, speed, directionString] = attributes

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
      cab: parseInt(cab),
      speed: parseInt(speed),
      direction: direction as Direction
    }
  }
}

function isValidDirection (direction: number): boolean {
  return !Object.values(Direction).includes(direction as Direction)
}
