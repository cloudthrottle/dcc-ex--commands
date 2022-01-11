import { makeCommandFromAttributes } from '../../utils/index.js'

export interface VerifyCVByteProgrammingCommandParams {
  cv: number
  byteValue: number
}

const verifyProgrammingDecoderByteKey = 'V'

/**
 * VERIFY CONFIGURATION VARIABLE BYTE FROM ENGINE DECODER ON PROGRAMMING TRACK
 * https://dcc-ex.com/reference/software/command-reference.html#verify-configuration-variable-byte-from-engine-decoder-on-programming-track
 */
export const verifyCVByteProgrammingCommand: (params: VerifyCVByteProgrammingCommandParams) => string = ({
  cv,
  byteValue
}) => {
  const attributes = [
    verifyProgrammingDecoderByteKey,
    cv,
    byteValue
  ]
  return makeCommandFromAttributes(attributes)
}
