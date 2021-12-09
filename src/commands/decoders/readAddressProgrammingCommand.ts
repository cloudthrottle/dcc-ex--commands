import { makeCommand } from '../utils'

const readProgrammingDecoderAddressKey = 'R'

/**
 * Read Engine address
 * https://dcc-ex.com/reference/software/command-reference.html#read-configuration-variable-byte-from-engine-decoder-on-programming-track
 */
export const readAddressProgrammingCommand: () => string = () => makeCommand(readProgrammingDecoderAddressKey)
