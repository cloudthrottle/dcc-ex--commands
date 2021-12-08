export interface DualCoilAddress {
    primaryAddress: number | null;
    subAddress: number | null;
}
export interface LinearAddress {
    linearAddress: number | null;
}
export interface Address extends LinearAddress, DualCoilAddress {
}
export declare const parseAddress: (address: number | DualCoilAddress) => Address;
