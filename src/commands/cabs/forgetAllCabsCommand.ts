import { makeCommand } from '../utils'

const forgetAllCabsCommandKey = '-'

/**
 * https://dcc-ex.com/reference/software/command-reference.html#engine-decoder-cab-operation-commands
 */
export const forgetAllCabsCommand: () => string = () => {
  return makeCommand(forgetAllCabsCommandKey)
}
