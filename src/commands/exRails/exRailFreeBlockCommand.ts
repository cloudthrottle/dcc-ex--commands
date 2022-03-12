import { makeCommandFromAttributes } from '../../utils/index.js'

export interface ExRailFreeBlockCommandParams {
  blockId: string
}

/**
 * Manually frees a virtual track Block
 * https://dcc-ex.com/automation/EX-RAIL-summary.html#diagnostics-control
 */
export const exRailFreeBlockCommand: (params: ExRailFreeBlockCommandParams) => string = ({ blockId }) => {
  const constant = '/ FREE'
  const attributes = [
    constant,
    blockId
  ]
  return makeCommandFromAttributes(attributes)
}
