import { makeCommand } from '../utils'
import { Active } from '../../types'

export interface CabCommandParams { cab: number, func: number, value: Active }

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
