import { makeCommandFromAttributes } from '../../utils/index.js'

export interface ExRailKillTaskCommandParams { taskId: string }

/**
 * Kills a currently running script task by ID (use </> to list task IDs)
 * https://dcc-ex.com/automation/EX-RAIL-summary.html#diagnostics-control
 */
export const exRailKillTaskCommand: (params: ExRailKillTaskCommandParams) => string = ({ taskId }) => {
  const constant = '/ KILL'
  const attributes = [
    constant,
    taskId
  ]
  return makeCommandFromAttributes(attributes)
}
