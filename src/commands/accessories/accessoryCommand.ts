import { parseAddress, ParseAddressParams } from '../utils/parseAddress'
import { makeCommand } from '../utils'
import { Active } from '../../types'

export interface AccessoryCommandParams { address: ParseAddressParams, active: Active }

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
  const str = attributes.join(' ')
  return makeCommand(str)
}
