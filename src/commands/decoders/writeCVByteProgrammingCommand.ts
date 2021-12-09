import { makeCommand } from '../utils'

export interface WriteCVByteProgrammingCommandParams {
  cv: number
  value: number
  callbackNum: number
  callbackSub: number
}

const writeProgrammingDecoderByteKey = 'W'

/**
 * WRITE CV BYTE TO ENGINE DECODER ON PROGRAMMING TRACK
 * https://dcc-ex.com/reference/software/command-reference.html#write-cv-byte-to-engine-decoder-on-programming-track
 */
export const writeCVByteProgrammingCommand: (params: WriteCVByteProgrammingCommandParams) => string = ({
  cv,
  value,
  callbackNum,
  callbackSub
}) => {
  const attributes = [
    writeProgrammingDecoderByteKey,
    cv,
    value,
    callbackNum,
    callbackSub
  ]
  const str = attributes.join(' ')
  return makeCommand(str)
}
