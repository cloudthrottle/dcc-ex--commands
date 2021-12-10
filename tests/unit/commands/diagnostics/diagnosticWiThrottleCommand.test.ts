import {diagnosticWiThrottleCommand, DiagnosticWiThrottleCommandParams} from "../../../../src";

describe('diagnosticWiThrottleCommand()', function () {
    it('is valid', () => {
        const options: DiagnosticWiThrottleCommandParams = {
            enable: 1
        }
        const sendString = '<D WIT 1>'

        const command = diagnosticWiThrottleCommand(options)
        expect(command).toEqual(sendString)
    })
})