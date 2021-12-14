import { diagnosticParserCommand, DiagnosticParserCommandParams } from '../../../../src'

describe('diagnosticParserCommand()', function () {
  it('is valid', () => {
    const options: DiagnosticParserCommandParams = {
      enable: 1
    }
    const sendString = '<D CMD 1>'

    const command = diagnosticParserCommand(options)
    expect(command).toEqual(sendString)
  })
})
