import { makeCommandFromAttributes } from '../../utils/index.js'

export interface ExRailStartTaskCommandParams { address: string, taskId: string }
export const exRailStartTaskCommand: (params: ExRailStartTaskCommandParams) => string = ({ address, taskId }) => {
  const constant = '/ START'
  const attributes = [
    constant,
    address,
    taskId
  ]
  return makeCommandFromAttributes(attributes)
}
