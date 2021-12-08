export interface DualCoilAddress {
    primaryAddress: number | null
    subAddress: number | null
}
export interface LinearAddress {
    linearAddress: number | null
}
export type Address = LinearAddress & DualCoilAddress
export type ParseAddressParams = number | DualCoilAddress

export const parseAddress = (address: ParseAddressParams): Address => {
    let linearAddress = null
    let primaryAddress = null
    let subAddress = null

    if (typeof (address) === 'number') {
        linearAddress = address
    } else {
        primaryAddress = address.primaryAddress
        subAddress = address.subAddress
    }
    return {linearAddress, primaryAddress, subAddress}
}