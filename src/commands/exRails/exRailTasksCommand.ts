import { makeCommand } from '../../utils/index.js'

/**
 * Returns the Routes & Automations control list in WiThrottle format. JMRI integration only!
 * https://dcc-ex.com/automation/EX-RAIL-summary.html#diagnostics-control
 */
export const exRailTasksCommand: () => string = () => makeCommand('/')
