import { makeCommand } from '../../utils/index.js'

/**
 * Pauses all automation - all locos E-STOP
 * https://dcc-ex.com/automation/EX-RAIL-summary.html#diagnostics-control
 */
export const exRailPauseCommand: () => string = () => makeCommand('PAUSE')
