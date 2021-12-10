import {Direction, throttleCommand, ThrottleCommandParams} from "../../../../src";

describe('throttleCommand()', function () {
    it('is valid', () => {
        const options: ThrottleCommandParams = {
            cab: 22,
            speed: 14,
            direction: Direction.REVERSE
        }
        const sendString = '<t 1 22 14 0>'
        const command = throttleCommand(options)
        expect(command).toEqual(sendString)
    })
})
