import {parseAddress, ParseAddressParams} from "../utils/parseAddress";
import {makeCommand} from "../utils";

export type Active = 0 | 1;
export type AccessoryCommandParams = { address: ParseAddressParams; active: Active };

const accessorySendKey = "a"

export const accessoryCommand: (params: AccessoryCommandParams) => string = ({address, active}) => {
    const {linearAddress, primaryAddress, subAddress} = parseAddress(address)

    const addressSend = linearAddress || `${primaryAddress} ${subAddress}`

    const attributes = [
        accessorySendKey,
        addressSend,
        active
    ]
    const str = attributes.join(' ')
    return makeCommand(str)
};