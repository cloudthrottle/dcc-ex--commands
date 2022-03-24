import { makeCommandFromAttributes } from '../../utils/index.js'

export interface ExRailStartTaskCommandParams { address: number, taskId: number }

/**
 * Starts a new task to send a loco onto a Route, or activate a non-loco Animation or Sequence
 * https://dcc-ex.com/automation/EX-RAIL-summary.html#diagnostics-control
 */
export const exRailStartTaskCommand: (params: ExRailStartTaskCommandParams) => string = ({ address, taskId }) => {
  const constant = '/ START'
  const attributes = [
    constant,
    address,
    taskId
  ]
  return makeCommandFromAttributes(attributes)
}
