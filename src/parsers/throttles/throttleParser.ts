import { Command, parseCommand } from '../../utils/index.js'
import { ParserAttributeError, ParserKeyError } from '../errors/index.js'
import { FunctionName, ParserResult, ParserStatus } from '../../types/index.js'
import { Direction, Speed } from '../../commands/index.js'

export interface ThrottleParams {
  register: number
  speed: Speed
  direction: Direction
}
export type ThrottleResult = ParserResult<ThrottleParams>
const throttleParserKey = 'T'

const isValidDirection = (direction: number): boolean => !Object.values(Direction).includes(direction as Direction)

const parseFromCommand: (params: Command) => ThrottleResult = ({ key, attributes }) => {
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
    parser: FunctionName.THROTTLE,
    status: ParserStatus.SUCCESS,
    params: {
      register: parseInt(register),
      speed: parseInt(speed),
      direction: direction as Direction
    }
  }
}

export const throttleParser: (command: string) => ThrottleResult = (command) => {
  const commandParams = parseCommand(command)
  return parseFromCommand(commandParams)
}
