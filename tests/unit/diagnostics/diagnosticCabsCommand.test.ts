import {diagnosticCabsCommand} from "../../../src";

describe('diagnosticCabsCommand()', function () {
  const sendString = '<D CABS>'

  it('is valid', () => {
    const command = diagnosticCabsCommand()
    expect(command).toBe(sendString)
  })
})
