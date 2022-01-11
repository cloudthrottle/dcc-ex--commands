import { BitValue } from '../../types/index.js'
import { makeCommandFromAttributes } from '../../utils/index.js'

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
