import { Active } from '../../types/index.js'
import { makeCommandFromAttributes } from '../../utils/index.js'

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
