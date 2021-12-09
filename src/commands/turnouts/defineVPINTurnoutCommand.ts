import { makeCommand } from '../utils'

export interface DefineVPINTurnoutCommandParams { turnout: number, pin: number }

const defineVPINTurnoutCommandKey = 'T'

/**
 * https://dcc-ex.com/reference/software/command-reference.html#defining-setting-up-a-turnout
 */
export const defineVPINTurnoutCommand: (params: DefineVPINTurnoutCommandParams) => string = ({ turnout, pin }) => {
  const constant = 'VPIN'
  const attributes = [
    defineVPINTurnoutCommandKey,
    turnout,
    constant,
    pin
  ]
  const str = attributes.join(' ')
  return makeCommand(str)
}
