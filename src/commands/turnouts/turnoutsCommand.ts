import { makeCommandFromAttributes } from '../../utils/index.js'

interface TurnoutsCommandParams {
  turnoutId?: number
}

const turnoutsCommandKey = 'JT'

/**
 *
 * @returns {string|{readonly returnString: string, readonly sendString: string, returnsKey: string, key: string}}
 */
export const turnoutsCommand: (params?: TurnoutsCommandParams) => string = ({ turnoutId } = {}) => {
  return makeCommandFromAttributes([turnoutsCommandKey, turnoutId])
}

/**
 * @deprecated Use turnoutsCommand instead
 */
export const listTurnoutsCommand: () => string = () => {
  return turnoutsCommand()
}
