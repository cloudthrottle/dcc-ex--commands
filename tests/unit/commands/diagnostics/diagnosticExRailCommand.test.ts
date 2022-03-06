import { Enabled } from '../../../../src'
import {
  diagnosticExRailCommand,
  DiagnosticExRailCommandParams
} from '../../../../src/commands/diagnostics/diagnosticExRailCommand'

describe('diagnosticExRailCommand()', function () {
  it('creates a valid ON command', () => {
    const options: DiagnosticExRailCommandParams = {
      enable: Enabled.ON
    }

    const sendString = '<D EXRAIL ON>'
    const command = diagnosticExRailCommand(options)
    expect(command).toEqual(sendString)
  })

  it('creates a valid OFF command', () => {
    const options: DiagnosticExRailCommandParams = {
      enable: Enabled.OFF
    }

    const sendString = '<D EXRAIL OFF>'
    const command = diagnosticExRailCommand(options)
    expect(command).toEqual(sendString)
  })
})
