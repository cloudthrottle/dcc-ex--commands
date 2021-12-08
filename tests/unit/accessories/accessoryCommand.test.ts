import {accessoryCommand, AccessoryCommandParams} from "../../../src";

describe('accessoryCommand', function () {
    test('with Linear address options', function () {
        const linearAddressOptions: AccessoryCommandParams = {
            address: 1234,
            active: 0
        }

        const sendString = '<a 1234 0>'

        const command = accessoryCommand(linearAddressOptions)
        expect(command).toEqual(sendString)
    })

    test('with Dual Coil address options', function () {
        const dualCoilAddressOptions: AccessoryCommandParams = {
            address: {
                primaryAddress: 1234,
                subAddress: 2
            },
            active: 1
        }

        const sendString = '<a 1234 2 1>'

        const command = accessoryCommand(dualCoilAddressOptions)
        expect(command).toEqual(sendString)
    })
})

