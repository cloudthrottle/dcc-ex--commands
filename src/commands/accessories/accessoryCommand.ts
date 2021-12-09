import { parseAddress, ParseAddressParams } from '../../utils/parseAddress'
import { Active } from '../../types'
import { makeCommandFromAttributes } from '../../utils/makeCommand'

export interface AccessoryCommandParams {
  address: ParseAddressParams
  active: Active
}

const accessorySendKey = 'a'

/**
 * https://dcc-ex.com/reference/software/command-reference.html#accessory-decoder-commands
 */
export const accessoryCommand: (params: AccessoryCommandParams) => string = ({ address, active }) => {
  const { linearAddress, primaryAddress, subAddress } = parseAddress(address)

  const addressSend = linearAddress ?? `${primaryAddress} ${subAddress}`

  const attributes = [
    accessorySendKey,
    addressSend,
    active
  ]
  return makeCommandFromAttributes(attributes)
}
