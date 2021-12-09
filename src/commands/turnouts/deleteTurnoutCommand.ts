import { makeCommand } from '../utils'

const deleteTurnoutCommandKey = 'T'

interface DeleteTurnoutCommandParams { turnout: any }
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
  const str = attributes.join(' ')
  return makeCommand(str)
}
