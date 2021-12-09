import { makeCommand } from '../utils'
import { Active } from '../../types'

export interface DiagnosticWiFiCommandParams { enable: Active }

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
  const str = attributes.join(' ')
  return makeCommand(str)
}
