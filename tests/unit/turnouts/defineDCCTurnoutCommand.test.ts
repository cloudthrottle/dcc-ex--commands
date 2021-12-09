import {defineDCCTurnoutCommand} from "../../../src";

describe('defineDCCTurnoutCommand()', function () {
    test('with Linear address options', function () {
        const linearAddressOptions = {
            turnout: 12,
            address: 1234
        }

        const sendString = '<T 12 DCC 1234>'

        const command = defineDCCTurnoutCommand(linearAddressOptions)
        expect(command).toBe(sendString)
    })

    test('with Dual Coil address options', function () {
        const dualCoilAddressOptions = {
            turnout: 12,
            address: {
                primaryAddress: 1234,
                subAddress: 2
            }
        }

        const sendString = '<T 12 DCC 1234 2>'

        const command = defineDCCTurnoutCommand(dualCoilAddressOptions)
        expect(command).toBe(sendString)
    })
})