import {eraseCommand} from "../../../../src";

describe('eraseCommand()', function () {
    it('is valid', () => {
        const sendString = '<e>'
        const command = eraseCommand()
        expect(command).toBe(sendString)
    })
})