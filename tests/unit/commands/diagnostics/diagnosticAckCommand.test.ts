import {diagnosticAckCommand, DiagnosticAckCommandParams} from "../../../../src";

describe('diagnosticAckCommand()', function () {
    it('is valid', () => {
        const options: DiagnosticAckCommandParams = {
            enable: 1
        }

        const sendString = '<D ACK 1>'
        const command = diagnosticAckCommand(options)
        expect(command).toEqual(sendString)
    })
})
