import {diagnosticRAMCommand} from "../../../src";

describe('diagnosticRAMCommand()', function () {
    it('is valid', () => {
        const sendString = '<D RAM>'
        const command = diagnosticRAMCommand()
        expect(command).toEqual(sendString)
    })
})
