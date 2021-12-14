import { verifyCVByteProgrammingCommand } from '../../../../src'

describe('verifyCVByteProgrammingCommand()', function () {
  it('is valid', () => {
    const options = {
      cv: 14,
      byteValue: 134
    }
    const sendString = '<V 14 134>'
    const command = verifyCVByteProgrammingCommand(options)
    expect(command).toBe(sendString)
  })
})
