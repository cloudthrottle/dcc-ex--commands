import { Active } from '../../types'
import { makeCommandFromAttributes } from '../../utils/index.js'

export interface DiagnosticAckCommandParams {
  enable: Active
}

const diagnosticAckCommandKey = 'D'

/**
 * Enables/Disables ACK diagnostics
 */
export const diagnosticAckCommand: (params: DiagnosticAckCommandParams) => string = ({ enable }) => {
  const constant = 'ACK'
  const attributes = [
    diagnosticAckCommandKey,
    constant,
    enable
  ]
  return makeCommandFromAttributes(attributes)
}
