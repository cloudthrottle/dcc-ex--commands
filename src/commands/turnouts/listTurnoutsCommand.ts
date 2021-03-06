import { makeCommand } from '../../utils/index.js'

const listTurnoutsCommandKey = 'T'

/**
 *
 * @returns {string|{readonly returnString: string, readonly sendString: string, returnsKey: string, key: string}}
 */
export const listTurnoutsCommand: () => string = () => makeCommand(listTurnoutsCommandKey)
