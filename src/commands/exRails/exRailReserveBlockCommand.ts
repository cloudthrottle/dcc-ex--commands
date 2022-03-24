import { makeCommandFromAttributes } from '../../utils/index.js'

export interface ExRailReserveBlockCommandParams {
  blockId: number
}

/**
 * Manually reserves a virtual track Block
 * https://dcc-ex.com/automation/EX-RAIL-summary.html#diagnostics-control
 */
export const exRailReserveBlockCommand: (params: ExRailReserveBlockCommandParams) => string = ({ blockId }) => {
  const constant = '/ RESERVE'
  const attributes = [
    constant,
    blockId
  ]
  return makeCommandFromAttributes(attributes)
}
