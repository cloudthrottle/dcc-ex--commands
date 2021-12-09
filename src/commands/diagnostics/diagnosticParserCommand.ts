import { makeCommand } from '../utils'
import { Active } from '../../types'

export interface DiagnosticParserCommandParams { enable: Active }

const diagnosticParserCommandKey = 'D'

/**
 * Enables/Disables Command Parser diagnostics
 */
export const diagnosticParserCommand: (params: DiagnosticParserCommandParams) => string = ({ enable }) => {
  const constant = 'CMD'
  const attributes = [
    diagnosticParserCommandKey,
    constant,
    enable
  ]
  const str = attributes.join(' ')
  return makeCommand(str)
}
