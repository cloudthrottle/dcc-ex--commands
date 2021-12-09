import { makeCommand } from '../utils'
import { BitValue } from '../../types'

const forgetCabCommandKey = '-'

export interface ForgerCabCommandParams {
  cab: number
}

/**
 * https://dcc-ex.com/reference/software/command-reference.html#engine-decoder-cab-operation-commands
 */
export const forgetCabCommand: (params: ForgerCabCommandParams) => string = ({ cab }) => {
  const attributes = [
    forgetCabCommandKey,
    cab
  ]
  const str = attributes.join(' ')
  return makeCommand(str)
}
