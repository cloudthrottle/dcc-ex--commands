export const parseAddress = (address) => {
    let linearAddress = null;
    let primaryAddress = null;
    let subAddress = null;
    if (typeof (address) === 'number') {
        linearAddress = address;
    }
    else {
        primaryAddress = address.primaryAddress;
        subAddress = address.subAddress;
    }
    return { linearAddress, primaryAddress, subAddress };
};
