import { makeCommand } from '../../utils/index.js'

const rosterSendKey = 'J'

/**
 * BETA
 */
export const rosterCommand: () => string = () => {
  return makeCommand(rosterSendKey)
}
