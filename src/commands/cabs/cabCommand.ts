import { makeCommand } from '../utils'
import { BitValue } from '../../types'

export interface CabCommandParams { cab: number, func: number, value: BitValue }

const cabSendKey = 'F'

/**
 * https://dcc-ex.com/reference/software/command-reference.html#cab-functions
 */
export const cabCommand: (params: CabCommandParams) => string = ({ cab, func, value }) => {
  const attributes = [
    cabSendKey,
    cab,
    func,
    value
  ]
  const str = attributes.join(' ')
  return makeCommand(str)
}
