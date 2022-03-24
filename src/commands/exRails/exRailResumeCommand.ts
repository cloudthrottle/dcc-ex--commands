import { makeCommand } from '../../utils/index.js'

/**
 * Resumes all automation - all locos are restarted at the speed when paused
 * https://dcc-ex.com/automation/EX-RAIL-summary.html#diagnostics-control
 */
export const exRailResumeCommand: () => string = () => makeCommand('/ RESUME')
