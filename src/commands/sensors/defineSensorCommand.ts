import { BitValue } from '../../types/index.js'
import { makeCommandFromAttributes } from '../../utils/index.js'

export interface DefineSensorCommandParams {
  sensor: number
  pin: number
  pullUp: BitValue
}

const defineSensorCommandKey = 'S'

/**
 * https://dcc-ex.com/reference/software/command-reference.html#sensors-inputs
 */
export const defineSensorCommand: (params: DefineSensorCommandParams) => string = ({ sensor, pin, pullUp }) => {
  const attributes = [
    defineSensorCommandKey,
    sensor,
    pin,
    pullUp
  ]
  return makeCommandFromAttributes(attributes)
}
