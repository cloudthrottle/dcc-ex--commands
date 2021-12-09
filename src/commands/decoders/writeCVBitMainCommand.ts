import { BitValue } from '../../types'
import { makeCommand } from '../utils'

export interface WriteCVBitMainCommandParams { cab: number, cv: number, bit: number, value: BitValue }

const writeMainDecoderBitKey = 'b'

/**
 * WRITE CV BIT TO ENGINE DECODER ON MAIN TRACK
 * https://dcc-ex.com/reference/software/command-reference.html#write-cv-bit-to-engine-decoder-on-main-track
 */
export const writeCVBitMainCommand: (params: WriteCVBitMainCommandParams) => string = function ({ cab, cv, bit, value }) {
  const attributes = [
    writeMainDecoderBitKey,
    cab,
    cv,
    bit,
    value
  ]
  const str = attributes.join(' ')
  return makeCommand(str)
}
