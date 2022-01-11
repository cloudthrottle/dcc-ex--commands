import { makeCommand } from '../../utils/index.js'

const storeCommandKey = 'E'

/**
 * Stores unsaved changes in EEPROM
 * https://dcc-ex.com/reference/software/command-reference.html#defining-setting-up-a-turnout
 */
export const storeCommand: () => string = () => makeCommand(storeCommandKey)
