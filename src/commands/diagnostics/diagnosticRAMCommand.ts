import { makeCommandFromAttributes } from '../../utils/index.js'

const diagnosticRAMCommandKey = 'D'

/**
 * Shows remaining RAM
 * https://dcc-ex.com/reference/software/command-reference.html#diagnostics
 */
export const diagnosticRAMCommand: () => string = () => {
  const constant = 'RAM'
  const attributes = [
    diagnosticRAMCommandKey,
    constant
  ]
  return makeCommandFromAttributes(attributes)
}
