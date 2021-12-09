import { makeCommand } from '../utils'
import { Active } from '../../types'

export interface DiagnosticAckCommandParams { enable: Active }

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
  const str = attributes.join(' ')
  return makeCommand(str)
}
