import { makeCommandFromAttributes, parseAddress } from '../../utils'
import { ParseAddressParams } from '../../utils/parseAddress'

const defineDCCTurnoutCommandKey = 'T'

export interface DefineDCCTurnoutCommandParams {
  turnout: number
  address: ParseAddressParams
}

/**
 * https://dcc-ex.com/reference/software/command-reference.html#defining-setting-up-a-turnout
 */
export const defineDCCTurnoutCommand: (params: DefineDCCTurnoutCommandParams) => string = function ({
  turnout,
  address
}) {
  const constant = 'DCC'
  const { linearAddress, primaryAddress, subAddress } = parseAddress(address)
  const addressSend = linearAddress || `${primaryAddress} ${subAddress}`
  const attributes = [
    defineDCCTurnoutCommandKey,
    turnout,
    constant,
    addressSend
  ]
  return makeCommandFromAttributes(attributes)
}
