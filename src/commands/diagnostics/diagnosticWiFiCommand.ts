import { Active } from '../../types/index.js'
import { makeCommandFromAttributes } from '../../utils/index.js'

export interface DiagnosticWiFiCommandParams {
  enable: Active
}

const diagnosticWiFiCommandKey = 'D'

/**
 * Enables/Disables Wifi diagnostics
 */
export const diagnosticWiFiCommand: (params: DiagnosticWiFiCommandParams) => string = ({ enable }) => {
  const constant = 'WIFI'
  const attributes = [
    diagnosticWiFiCommandKey,
    constant,
    enable
  ]
  return makeCommandFromAttributes(attributes)
}
