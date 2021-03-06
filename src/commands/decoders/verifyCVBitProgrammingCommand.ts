import { makeCommandFromAttributes } from '../../utils/index.js'
import { BitValue } from '../../types/index.js'

export interface VerifyCVBitProgrammingCommandParams {
  cv: number
  bit: number
  bitValue: BitValue
}

const verifyProgrammingDecoderBitKey = 'V'

/**
 * VERIFY CONFIGURATION VARIABLE BIT FROM ENGINE DECODER ON PROGRAMMING TRACK
 * https://dcc-ex.com/reference/software/command-reference.html#verify-configuration-variable-bit-from-engine-decoder-on-programming-track
 */
export const verifyCVBitProgrammingCommand: (params: VerifyCVBitProgrammingCommandParams) => string = ({
  cv,
  bit,
  bitValue
}) => {
  const attributes = [
    verifyProgrammingDecoderBitKey,
    cv,
    bit,
    bitValue
  ]
  return makeCommandFromAttributes(attributes)
}
