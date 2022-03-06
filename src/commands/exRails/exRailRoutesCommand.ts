import { makeCommand } from '../../utils/index.js'

/**
 * Displays EX-RAIL running task information
 * https://dcc-ex.com/automation/EX-RAIL-summary.html#diagnostics-control
 */
export const exRailRoutesCommand: () => string = () => makeCommand('/ ROUTES')
