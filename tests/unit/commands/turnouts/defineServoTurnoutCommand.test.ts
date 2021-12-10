import {defineServoTurnoutCommand} from "../../../../src";

describe('defineServoTurnoutCommand()', function () {
    it('is valid', () => {
        const options = {
            turnout: 12,
            pin: 100,
            thrownPosition: 410,
            closedPosition: 205,
            profile: 0
        }
        const sendString = '<T 12 SERVO 100 410 205 0>'
        const command = defineServoTurnoutCommand(options)
        expect(command).toEqual(sendString)
    })

})