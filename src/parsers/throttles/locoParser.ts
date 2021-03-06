import { Command, parseCommand } from '../../utils/index.js'
import { ParserKeyError } from '../errors/index.js'
import { BitValue, FunctionButton, FunctionButtons, FunctionName, ParserResult, ParserStatus } from '../../types/index.js'
import { Direction, Speed } from '../../commands/index.js'
import { ThrottleParams } from './throttleParser.js'

type LocoFunctionButtons = FunctionButtons<LocoFunctionButton>
type LocoFunctionButton = Pick<FunctionButton, 'value'>

export interface LocoParams extends ThrottleParams {
  cabId: number
  functionButtons: LocoFunctionButtons
}

export type LocoResult = ParserResult<LocoParams>

export function parseSpeedAndDirection (speedValue: number): { speed: Speed, direction: Direction } {
  const direction = (speedValue - 128 >= 0) ? Direction.FORWARD : Direction.REVERSE
  const normalisedSpeed = (speedValue - 128 >= 0) ? speedValue - 128 : speedValue

  let speed
  switch (normalisedSpeed) {
    case 0: {
      speed = 0
      break
    }
    case 1: {
      speed = -1
      break
    }
    default: {
      speed = normalisedSpeed - 1
    }
  }

  return {
    speed,
    direction
  }
}

export const parseFunctionButtons = (functionButtonValue: number): LocoFunctionButtons => {
  const values = functionButtonValue.toString(2).split('').reverse().map(value => parseInt(value))

  const numOfFunctions = 29
  return Array.from(Array(numOfFunctions))
    .reduce<LocoFunctionButtons>((acc, currentValue, index) => {
    acc[index] = {
      value: values[index] as BitValue ?? 0
    }
    return acc
  }, {})
}

const locoParserKey = 'l'

const parseFromCommand: (params: Command) => LocoResult = ({ key, attributes }) => {
  const [cabIdValue, registerValue, speedValue, functionButtonsValue] = attributes

  if (key !== locoParserKey) {
    throw new ParserKeyError('locoParser', key)
  }

  const { speed, direction } = parseSpeedAndDirection(parseInt(speedValue))
  const functionButtons = parseFunctionButtons(parseInt(functionButtonsValue))

  return {
    key: locoParserKey,
    parser: FunctionName.LOCO,
    status: ParserStatus.SUCCESS,
    params: {
      register: parseInt(registerValue),
      speed,
      direction,
      cabId: parseInt(cabIdValue),
      functionButtons
    }
  }
}

export const locoParser: (command: string) => LocoResult = (command) => {
  const commandParams = parseCommand(command)
  return parseFromCommand(commandParams)
}
