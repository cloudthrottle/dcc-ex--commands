import { Active } from '../../types'
import { makeCommandFromAttributes } from '../../utils'

export interface DiagnosticParserCommandParams {
  enable: Active
}

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
  return makeCommandFromAttributes(attributes)
}
