import { BitValue } from '../../types/index.js'
import { makeCommandFromAttributes } from '../../utils/index.js'

export interface WriteCVBitProgrammingCommandParams {
  cv: number
  bit: number
  value: BitValue
  callbackNum: number
  callbackSub: number
}

const writeProgrammingDecoderBitKey = 'B'

/**
 * WRITE CV BIT TO ENGINE DECODER ON PROGRAMMING TRACK
 * https://dcc-ex.com/reference/software/command-reference.html#write-cv-bit-to-engine-decoder-on-programming-track
 */
export const writeCVBitProgrammingCommand: (params: WriteCVBitProgrammingCommandParams) => string = ({
  cv,
  bit,
  value,
  callbackNum,
  callbackSub
}) => {
  const attributes = [
    writeProgrammingDecoderBitKey,
    cv,
    bit,
    value,
    callbackNum,
    callbackSub
  ]
  return makeCommandFromAttributes(attributes)
}
