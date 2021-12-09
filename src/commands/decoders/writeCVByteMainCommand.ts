import { makeCommand } from '../utils'

export interface WriteCVByteMainCommandParams { cab: number, cv: number, value: number }

const writeDecoderByteKey = 'w'

/**
 * WRITE CV BYTE TO ENGINE DECODER ON MAIN TRACK
 * https://dcc-ex.com/reference/software/command-reference.html#write-cv-byte-to-engine-decoder-on-main-track
 */
export const writeCVByteMainCommand: (params: WriteCVByteMainCommandParams) => string = ({ cab, cv, value }) => {
  const attributes = [
    writeDecoderByteKey,
    cab,
    cv,
    value
  ]
  const str = attributes.join(' ')
  return makeCommand(str)
}
