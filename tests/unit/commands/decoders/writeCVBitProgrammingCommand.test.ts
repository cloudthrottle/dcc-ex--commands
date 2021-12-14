import { writeCVBitProgrammingCommand, WriteCVBitProgrammingCommandParams } from '../../../../src'

describe('writeCVBitProgrammingCommand()', function () {
  it('is valid', () => {
    const options: WriteCVBitProgrammingCommandParams = {
      cv: 14,
      bit: 4,
      value: 1,
      callbackNum: 1024,
      callbackSub: 3
    }
    const sendString = '<B 14 4 1 1024 3>'

    const command = writeCVBitProgrammingCommand(options)
    expect(command).toEqual(sendString)
  })
})
