import { verifyCVBitProgrammingCommand, VerifyCVBitProgrammingCommandParams } from '../../../../src'

describe('verifyCVBitProgrammingCommand()', function () {
  it('is valid', () => {
    const options: VerifyCVBitProgrammingCommandParams = {
      cv: 14,
      bit: 5,
      bitValue: 1
    }
    const sendString = '<V 14 5 1>'
    const command = verifyCVBitProgrammingCommand(options)
    expect(command).toBe(sendString)
  })
})
