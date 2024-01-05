import { makeCommand } from '../../utils/index.js'

const listTurnoutsCommandKey = 'JT'

/**
 *
 * @returns {string|{readonly returnString: string, readonly sendString: string, returnsKey: string, key: string}}
 */
export const listTurnoutsCommand: () => string = () => makeCommand(listTurnoutsCommandKey)
