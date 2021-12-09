import { makeCommand } from '../utils'
import { Active } from '../../types'

export interface WriteCVBitProgrammingCommandParams {
  cv: number
  bit: number
  value: Active
  callbackNum: number
  callbackSub: number
}

const writeProgrammingDecoderBitKey = 'B'

/**
 * WRITE CV BIT TO ENGINE DECODER ON PROGRAMMING TRACK
 * https://dcc-ex.com/reference/software/command-reference.html#write-cv-bit-to-engine-decoder-on-programming-track
 */
export const writeCVBitProgrammingCommand: (params: WriteCVBitProgrammingCommandParams) => string = ({ cv, bit, value, callbackNum, callbackSub }) => {
  const attributes = [
    writeProgrammingDecoderBitKey,
    cv,
    bit,
    value,
    callbackNum,
    callbackSub
  ]
  const str = attributes.join(' ')
  return makeCommand(str)
}
