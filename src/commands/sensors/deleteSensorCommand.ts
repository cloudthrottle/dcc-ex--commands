import { makeCommand } from '../utils'

export interface SensorCommandParams { sensor: number }

const deleteSensorCommandKey = 'S'

/**
 * https://dcc-ex.com/reference/software/command-reference.html#sensors-inputs
 */
export const deleteSensorCommand: (params: SensorCommandParams) => string = ({ sensor }) => {
  const attributes = [
    deleteSensorCommandKey,
    sensor
  ]
  const str = attributes.join(' ')
  return makeCommand(str)
}
