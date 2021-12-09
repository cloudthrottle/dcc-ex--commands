import {defineVPINTurnoutCommand} from "../../../src";

describe('defineVPINTurnoutCommand()', function () {
    it('is valid', () => {
        const options = {
            turnout: 12,
            pin: 100
        }

        const sendString = '<T 12 VPIN 100>'

        const command = defineVPINTurnoutCommand(options)
        expect(command).toBe(sendString)
    })
})