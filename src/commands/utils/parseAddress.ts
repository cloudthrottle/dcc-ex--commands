export interface DualCoilAddress {
    primaryAddress: number | null
    subAddress: number | null
}

export interface LinearAddress {
    linearAddress: number | null
}

export interface Address extends LinearAddress, DualCoilAddress {
}

export const parseAddress = (address: number | DualCoilAddress): Address => {
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