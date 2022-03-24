import { makeCommandFromAttributes } from '../../utils/index.js'

export interface ExRailUnlatchSensorCommandParams {
  sensorId: number
}

/**
 * Unlock sensor, returning to current external state
 * https://dcc-ex.com/automation/EX-RAIL-summary.html#diagnostics-control
 */
export const exRailUnlatchSensorCommand: (params: ExRailUnlatchSensorCommandParams) => string = ({ sensorId }) => {
  const constant = '/ UNLATCH'
  const attributes = [
    constant,
    sensorId
  ]
  return makeCommandFromAttributes(attributes)
}
