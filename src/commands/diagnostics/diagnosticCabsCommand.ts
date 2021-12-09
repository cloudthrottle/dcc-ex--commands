import { makeCommand } from '../utils'

const diagnosticCabsCommandKey = 'D'

/**
 * Shows cab numbers and speed in reminder table.
 * https://dcc-ex.com/reference/software/command-reference.html#diagnostics
 * @returns {string|null|{readonly returnString: null, readonly sendString: string, constant: string, returnsKey: null, key: string}}
 */
export function diagnosticCabsCommand () {
  const constant = 'CABS'

  const attributes = [
    diagnosticCabsCommandKey,
    constant
  ]
  const str = attributes.join(' ')
  return makeCommand(str)
}
