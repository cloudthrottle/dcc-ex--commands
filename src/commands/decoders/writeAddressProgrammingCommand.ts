import { makeCommandFromAttributes } from '../../utils/index.js'

export interface WriteAddressProgrammingCommandParams {
  address: number
}

const writeDecoderAddressKey = 'W'

/**
 * WRITE LOCO ADDRESS TO ENGINE DECODER ON PROGRAMMING TRACK
 * https://dcc-ex.com/reference/software/command-reference.html#write-loco-address-to-engine-decoder-on-programming-track
 */
export const writeAddressProgrammingCommand: (params: WriteAddressProgrammingCommandParams) => string = ({ address }) => {
  const attributes = [
    writeDecoderAddressKey,
    address
  ]
  return makeCommandFromAttributes(attributes)
}
