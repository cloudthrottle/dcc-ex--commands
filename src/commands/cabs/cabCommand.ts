import { BitValue } from '../../types'
import { makeCommandFromAttributes } from '../../utils/makeCommand'

export interface CabCommandParams {
  cab: number
  func: number
  value: BitValue
}

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
  return makeCommandFromAttributes(attributes)
}
