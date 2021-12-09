import { makeCommand } from '../utils'
import { Active } from '../../types'

export interface DiagnosticWiThrottleCommandParams { enable: Active }

const diagnosticWiThrottleCommandKey = 'D'

/**
 * Enables/Disables Withrottle diagnostics
 */
export const diagnosticWiThrottleCommand: (params: DiagnosticWiThrottleCommandParams) => string = ({ enable }) => {
  const constant = 'WIT'
  const attributes = [
    diagnosticWiThrottleCommandKey,
    constant,
    enable
  ]
  const str = attributes.join(' ')
  return makeCommand(str)
}
