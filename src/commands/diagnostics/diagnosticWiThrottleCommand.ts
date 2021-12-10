import { Active } from '../../types'
import { makeCommandFromAttributes } from '../../utils'

export interface DiagnosticWiThrottleCommandParams {
  enable: Active
}

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
  return makeCommandFromAttributes(attributes)
}
