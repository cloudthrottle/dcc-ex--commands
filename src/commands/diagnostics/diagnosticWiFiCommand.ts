import { Active } from '../../types'
import { makeCommandFromAttributes } from '../../utils/makeCommand'

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
