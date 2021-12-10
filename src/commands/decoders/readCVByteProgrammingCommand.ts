import { makeCommandFromAttributes } from '../..'

export interface ReadCVByteProgrammingCommandParams {
  cv: number
  callbackNum: number
  callbackSub: number
}

const readProgrammingDecoderByteKey = 'R'

/**
 * READ CONFIGURATION VARIABLE BYTE FROM ENGINE DECODER ON PROGRAMMING TRACK
 * https://dcc-ex.com/reference/software/command-reference.html#read-configuration-variable-byte-from-engine-decoder-on-programming-track
 */
export const readCVByteProgrammingCommand: (params: ReadCVByteProgrammingCommandParams) => string = ({
  cv,
  callbackNum,
  callbackSub
}) => {
  const attributes = [
    readProgrammingDecoderByteKey,
    cv,
    callbackNum,
    callbackSub
  ]
  return makeCommandFromAttributes(attributes)
}
