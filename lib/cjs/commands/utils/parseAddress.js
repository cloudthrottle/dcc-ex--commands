"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseAddress = void 0;
const parseAddress = (address) => {
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
exports.parseAddress = parseAddress;
