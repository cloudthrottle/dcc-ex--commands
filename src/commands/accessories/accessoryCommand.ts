import { makeCommandFromAttributes, parseAddress, ParseAddressParams } from '../../utils/index.js'
import { Active } from '../../types/index.js'

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

  const addressSend = linearAddress ?? [primaryAddress, subAddress].join(' ')

  const attributes = [
    accessorySendKey,
    addressSend,
    active
  ]
  return makeCommandFromAttributes(attributes)
}
