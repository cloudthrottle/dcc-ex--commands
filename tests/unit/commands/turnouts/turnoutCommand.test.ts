import {turnoutCommand} from "../../../../src";

describe('turnoutCommand()', function () {
    test('is valid', () => {
        const options = {
            turnout: 22,
            thrown: 0
        }
        const sendString = '<T 22 0>'

        const command = turnoutCommand(options)
        expect(command).toEqual(sendString)
    })
})