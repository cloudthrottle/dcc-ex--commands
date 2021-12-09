import {parseAddress} from "../../../src";

describe('parseAddress()', function () {
    describe('when a linear address is provided', function () {
        const linearAddressArguments = 1234

        test('returns with the linear address filled', function () {
            const {linearAddress} = parseAddress(linearAddressArguments)
            expect(linearAddress).toBe(1234)
        })
        test('returns with the primary address blank ', function () {
            const {primaryAddress} = parseAddress(linearAddressArguments)
            expect(primaryAddress).toBe(null)
        })
        test('returns with the sub address blank ', function () {
            const {subAddress} = parseAddress(linearAddressArguments)
            expect(subAddress).toBe(null)
        })
    })

    describe('when a dual coil address is provided', function () {
        const dualCoilAddressArguments = {
            primaryAddress: 1234,
            subAddress: 2
        }

        test('returns with the linear address filled', function () {
            const {linearAddress} = parseAddress(dualCoilAddressArguments)
            expect(linearAddress).toBe(null)
        })
        test('returns with the primary address blank ', function () {
            const {primaryAddress} = parseAddress(dualCoilAddressArguments)
            expect(primaryAddress).toBe(1234)
        })
        test('returns with the sub address blank ', function () {
            const {subAddress} = parseAddress(dualCoilAddressArguments)
            expect(subAddress).toBe(2)
        })
    })
})