import { makeCommand } from '../../utils'

const eraseCommandKey = 'e'

/**
 * ERASE everything; (turnouts, sensors, and outputs)
 * https://dcc-ex.com/reference/software/command-reference.html#defining-setting-up-a-turnout
 */
export const eraseCommand: () => string = () => makeCommand(eraseCommandKey)
