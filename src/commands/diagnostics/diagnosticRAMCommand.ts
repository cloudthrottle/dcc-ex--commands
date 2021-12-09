
import { makeCommand } from '../utils'

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
  const str = attributes.join(' ')
  return makeCommand(str)
}
