import { makeCommandFromAttributes } from '../../utils/index.js'

export interface ExRailLatchSensorCommandParams {
  sensorId: string
}

/**
 * Lock sensor ON, preventing external influence
 * https://dcc-ex.com/automation/EX-RAIL-summary.html#diagnostics-control
 */
export const exRailLatchSensorCommand: (params: ExRailLatchSensorCommandParams) => string = ({ sensorId }) => {
  const constant = '/ LATCH'
  const attributes = [
    constant,
    sensorId
  ]
  return makeCommandFromAttributes(attributes)
}
