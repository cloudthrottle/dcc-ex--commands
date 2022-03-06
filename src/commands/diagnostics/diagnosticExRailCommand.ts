import { Enabled } from '../../types/index.js'
import { makeCommandFromAttributes } from '../../utils/index.js'

export interface DiagnosticExRailCommandParams {
  enable: Enabled
}

const diagnosticExRailCommandKey = 'D'

/**
 * Enables/Disables ExRail diagnostics
 */
export const diagnosticExRailCommand: (params: DiagnosticExRailCommandParams) => string = ({ enable }) => {
  const constant = 'EXRAIL'
  const attributes = [
    diagnosticExRailCommandKey,
    constant,
    enable
  ]
  return makeCommandFromAttributes(attributes)
}
