import { makeCommandFromAttributes } from '../../utils/index.js'

const deleteTurnoutCommandKey = 'T'

interface DeleteTurnoutCommandParams {
  turnout: number
}

/**
 *
 * @param {number} turnout
 * @returns {{readonly returnString: string, readonly sendString: string, turnout, returnsKey: string, key: string}|string}
 */
export const deleteTurnoutCommand: (params: DeleteTurnoutCommandParams) => string = ({ turnout }) => {
  const attributes = [
    deleteTurnoutCommandKey,
    turnout
  ]
  return makeCommandFromAttributes(attributes)
}
