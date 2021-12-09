import { makeCommandFromAttributes } from '../../utils/makeCommand'

export interface WriteCVByteMainCommandParams {
  cab: number
  cv: number
  value: number
}

const writeMainDecoderByteKey = 'w'

/**
 * WRITE CV BYTE TO ENGINE DECODER ON MAIN TRACK
 * https://dcc-ex.com/reference/software/command-reference.html#write-cv-byte-to-engine-decoder-on-main-track
 */
export const writeCVByteMainCommand: (params: WriteCVByteMainCommandParams) => string = ({ cab, cv, value }) => {
  const attributes = [
    writeMainDecoderByteKey,
    cab,
    cv,
    value
  ]
  return makeCommandFromAttributes(attributes)
}
