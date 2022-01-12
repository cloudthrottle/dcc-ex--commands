import { makeCommandFromAttributes } from '../../utils/index.js'

interface RosterCommandParams {
  cabId?: number
}

const rosterSendKey = 'J'

/**
 * BETA
 */
export const rosterCommand: (params?: RosterCommandParams) => string = ({ cabId } = {}) => {
  return makeCommandFromAttributes([rosterSendKey, cabId])
}
