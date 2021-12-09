import {diagnosticWiFiCommand, DiagnosticWiFiCommandParams} from "../../../src";

describe('diagnosticWiFiCommand()', function () {
    it('is valid', () => {
        const options: DiagnosticWiFiCommandParams = {
            enable: 1
        }
        const sendString = '<D WIFI 1>'
        const command = diagnosticWiFiCommand(options)
        expect(command).toEqual(sendString)
    })
})